import React, { useState, useEffect, useRef } from 'react';
import './path.css'
import Arena from './Arena';

function PathF() {
    const gridSize = { rows: 40, cols: 80 };
    const gridData = Array.from({ length: gridSize.rows }, () => Array(gridSize.cols).fill(0));
    const selectedsol = [];
    let mode = "";
    let selectedSoldier = null;
    const obstacles = [
        [7, 10], [13, 2], [8, 55], [3, 20], [16, 4],
        [39 , 27], [19, 17], [2, 25], [2, 29], [17, 28], [4, 32],[12,1],[13,25],[32, 22], [25, 39], [27, 59], [2, 25], [25, 15],
        [32, 22], [34, 32], [35, 43], [14, 47], [10, 53], [14, 34],[18,19],[12,18],[34,31],[29,41],[4,56]
    ];
    

    const gridRef = useRef(null); // Ref for the grid container

    useEffect(() => {
        createGrid();

        // Adding event listeners to the buttons after the component mounts
        const placeSoldierButton = document.getElementById('placeSoldier');
        const addEnemyButton = document.getElementById('addEnemy');
        const selectSoldierButton = document.getElementById('selectSoldier');
        const submitButton = document.getElementById('submit');
        const resetButton = document.getElementById('reset');
        const hideButton = document.getElementById('hideme');
        hideButton.addEventListener('click',hideplease);


        // Attach event listeners
        placeSoldierButton.addEventListener('click', () => (mode = "placeSoldier"));
        addEnemyButton.addEventListener('click', () => (mode = "addEnemy"));
        selectSoldierButton.addEventListener('click', () => (mode = "selectSoldier"));
        submitButton.addEventListener('click', () => (mode = "submit"));
        resetButton.addEventListener('click', resetGrid);

        // Clean up event listeners on unmount
        return () => {
            placeSoldierButton.removeEventListener('click', () => (mode = "placeSoldier"));
            addEnemyButton.removeEventListener('click', () => (mode = "addEnemy"));
            selectSoldierButton.removeEventListener('click', () => (mode = "selectSoldier"));
            submitButton.removeEventListener('click', () => (mode = "submit"));
            resetButton.removeEventListener('click', resetGrid);
        };
    }, []);

    function createGrid() {
        if (!gridRef.current) return; // Check if the gridRef is set
        gridRef.current.innerHTML = "";
        for (let row = 0; row < gridSize.rows; row++) {
            for (let col = 0; col < gridSize.cols; col++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', () => handleCellClick(row, col));
                gridRef.current.appendChild(cell);
            }
        }
        
        // Setting obstacles
        setObstacles();
    }

    function setObstacles() {
        // Add obstacle cells as defined in your code
        
        obstacles.forEach(([row, col]) => {
            gridData[row][col] = 2;
            const cell = document.querySelector(`.grid-cell[data-row='${row}'][data-col='${col}']`);
            if (cell) cell.classList.add('hide');
        });
    }
    function hideplease(){
        selectedsol.forEach((a,ind)=>{
            // let [b,c]={...a};
            // 
            // computePath({b,c},selectedsol.pop());
            let check=[];
            let f=false;
            for(let i=0;i<obstacles.length;i++){
                // if(!check.includes(i) && f==false){
                    if( f==false){

                    computePath({row:obstacles[i][0],col:obstacles[i][1]},a);
                    check.push(i);
                    f=true;
                }
            }
        })
    }
    function resetGrid() {
        createGrid();
        for (let row = 0; row < gridSize.rows; row++) {
            for (let col = 0; col < gridSize.cols; col++) {
                gridData[row][col] = 0;
            }
        }
        selectedSoldier = null;
        mode = "";
    }

    function handleCellClick(row, col) {
        const cell = document.querySelector(`.grid-cell[data-row='${row}'][data-col='${col}']`);

        if (mode === "placeSoldier" && gridData[row][col] === 0) {
            gridData[row][col] = 1;
            cell.classList.add('soldier');
        } else if (mode === "addEnemy") {
            gridData[row][col] = -3;
            cell.classList.add('enemy');
            applyDangerZone(row, col);
        } else if (mode === "selectSoldier" && gridData[row][col] === 1) {
            selectedSoldier = { row, col };
            selectedsol.push(selectedSoldier);
            cell.classList.add('selected-soldier');
        } else if (mode === "submit" && gridData[row][col] === 0) {
            selectedsol.forEach((a) => {
                let r = a.row;
                let c = a.col;
                console.log({ r, c });
                computePath(a, { row, col });
            });
            selectedsol.length = 0;
            mode = "";
            selectedSoldier = null;
        }
    }

    function applyDangerZone(row, col) {
        const neighbors = getNeighbors(row, col);
        const sideNeighbors = getSideNeighbors(row, col);
        neighbors.forEach(({ row, col }) => {
            gridData[row][col] += -2;
            const cell = document.querySelector(`.grid-cell[data-row='${row}'][data-col='${col}']`);
            if (cell) cell.classList.add('danger');
        });
        sideNeighbors.forEach(({ row, col }) => {
            gridData[row][col] += -1;
            const cell = document.querySelector(`.grid-cell[data-row='${row}'][data-col='${col}']`);
            if (cell) cell.classList.add('danger');
        });
    }

    function computePath(start, end) {
        const path = aStar(start, end, gridData);
        path.forEach(({ row, col }) => {
            
            const cell = document.querySelector(`.grid-cell[data-row='${row}'][data-col='${col}']`);
            if (cell) cell.classList.add('path');
        });
    }

    function aStar(start, end, gridData) {
        const openSet = [start];
        const cameFrom = {};
        const gScore = Array.from({ length: gridSize.rows }, () => Array(gridSize.cols).fill(Infinity));
        gScore[start.row][start.col] = 0;
        const fScore = Array.from({ length: gridSize.rows }, () => Array(gridSize.cols).fill(Infinity));
        fScore[start.row][start.col] = heuristic(start, end);

        while (openSet.length > 0) {
            openSet.sort((a, b) => fScore[a.row][a.col] - fScore[b.row][b.col]);
            let current = openSet.shift();

            if (current.row === end.row && current.col === end.col) {
                return reconstructPath(cameFrom, current);
            }

            const neighbors = getNeighbors(current.row, current.col);
            for (const neighbor of neighbors) {
                const cellValue = gridData[neighbor.row][neighbor.col];
                if (cellValue === -3) continue;
                let movementCost = cellValue > 0 ? 1 : cellValue === 0 ? 2 : cellValue === -1 ? 5 : 10;
                const tentativeGScore = gScore[current.row][current.col] + movementCost;

                if (tentativeGScore < gScore[neighbor.row][neighbor.col]) {
                    cameFrom[`${neighbor.row},${neighbor.col}`] = current;
                    gScore[neighbor.row][neighbor.col] = tentativeGScore;
                    fScore[neighbor.row][neighbor.col] = tentativeGScore + heuristic(neighbor, end);

                    if (!openSet.some(node => node.row === neighbor.row && node.col === neighbor.col)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
        return [];
    }

    function heuristic(a, b) {
        return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
    }

    function reconstructPath(cameFrom, current) {
        const path = [current];
        while (cameFrom[`${current.row},${current.col}`]) {
            current = cameFrom[`${current.row},${current.col}`];
            path.push(current);
        }
        return path.reverse();
    }

    function getNeighbors(row, col) {
        const neighbors = [];
        if (row > 0) neighbors.push({ row: row - 1, col });
        if (row < gridSize.rows - 1) neighbors.push({ row: row + 1, col });
        if (col > 0) neighbors.push({ row, col: col - 1 });
        if (col < gridSize.cols - 1) neighbors.push({ row, col: col + 1 });
        return neighbors;
    }

    function getSideNeighbors(row, col) {
        const sideNeighbors = [];
        if (row > 0 && col > 0) sideNeighbors.push({ row: row - 1, col: col - 1 });
        if (row > 0 && col < gridSize.cols - 1) sideNeighbors.push({ row: row - 1, col: col + 1 });
        if (row < gridSize.rows - 1 && col > 0) sideNeighbors.push({ row: row + 1, col: col - 1 });
        if (row < gridSize.rows - 1 && col < gridSize.cols - 1) sideNeighbors.push({ row: row + 1, col: col + 1 });
        return sideNeighbors;
    }

    return (
        <>
        {/* <div  className='bg-black w-full h-[15vh] flex justify-center items-center text-white'>
            <h1>Arena</h1>
        </div> */}
<Arena/>
        <div className='gri bg-black text-white text-semibold'>
            <div ref={gridRef} id="grid" className="grid-container mt-12"></div>
            <div className='mt-10 gap-10 flex'>
            <button id="placeSoldier" className='bg-blue-400 rounded-md '>Place Soldier</button>
            <button id="addEnemy" className='bg-blue-400 rounded-md ' >Add Enemy</button>
            <button id="selectSoldier" className='bg-blue-400 rounded-md '>Select Soldier</button>
            <button id="submit" className='bg-green-400 rounded-md '>find path</button>
            <button id="hideme" className='bg-green-400  rounded-md '>Retreat</button>
            <button id="reset" className='bg-blue-400  rounded-md '>Reset</button>
            </div>
                
        </div>
        <div className='bg-black w-full h-[22vh]'></div>
        </>
    );
}

export default PathF;

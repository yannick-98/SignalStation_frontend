import React, { useState } from 'react'
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';


const MenuS = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            {/* Botón para abrir el modal en pantallas pequeñas */}
            <div className='text-center pt-2'>
                <button onClick={openModal} className='px-3 rounded-xl bg-black text-yellow-500 bg-opacity-60 text-xl'>HOME</button>
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Ejemplo de Menú Modal"
                className="bg-black bg-opacity-90 p-8 h-screen w-screen  flex flex-col justify-between"
            >
                <ul className='text-2xl'>
                    <li><NavLink to="/Station/Home" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Home</NavLink></li>
                    <li><NavLink to="/Station/Symbols" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Symbols</NavLink></li>
                    <li><NavLink to="/Station/Statistics" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Statistics</NavLink></li>
                    <li><NavLink to="/Station/My-alerts" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>My alerts</NavLink></li>
                    <li><NavLink to="/Station/My-strategies" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>My strategies</NavLink></li>
                    <li><NavLink to="/Station/Settings" className={({ isActive }) => (isActive ? "text-orange-600" : "")}>Settings</NavLink></li>
                </ul>
                <div className='flex flex-col justify-between w-full h-[28rem] p-4 text-center border rounded-xl border-white'>
                    <h1 className='uppercase'>Signals</h1>
                    <NavLink>See all</NavLink>
                </div>
                <div className='flex w-full justify-between'>
                    <ul className='text-xl'>
                        <li><NavLink to="/Station/Symbols">Change plan</NavLink></li>
                        <li><NavLink to="/Station/Symbols">My account</NavLink></li>
                    </ul>
                    <p className='border rounded-xl flex items-center gap-1 border-white p-1'>Plan: <span className='text-violet-500'>PRO</span></p>
                </div>
                <button onClick={closeModal}>Cerrar Menú</button>
            </Modal>
        </div >
    )
}

export default MenuS

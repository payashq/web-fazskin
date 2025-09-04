import React from 'react'
export default function Navbar() {
    return (
        <header className="header">
            <div className="content-1">
            <div className="navcontent">
                <div className="navlogo">
                    <img src="/icon-map.png" alt="" style={{width:'23px', height:'23px'}} id="icon-maps"/>
                    <h4>Batulipai, Karimun</h4>
                </div>
                <div className="navline"></div>
                <div className="navbutton">
                    <img src="/fazskin-logo-removebg.png" alt="" />
                    <div className="navbutton-right">
                        <h4>Layanan</h4>
                        <h4>Tentang Kami</h4>
                        <h4>Kontak</h4>
                        <h4>Lokasi</h4>
                        <div className="jadwal-button"><h4>Cek Jadwal</h4> <img src="/calendar-check.png" alt="" style={{height: '20px', width: '20px'}}/></div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}
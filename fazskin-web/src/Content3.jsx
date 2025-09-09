import Ulasan from "./Ulasan.jsx";

export default function Content3() {
    return (
        <div className="content-web2">
            <div className="container-2">
                <h2 style={{color: 'white', fontWeight:'600', fontSize: '30px'}}>Ulasan Pelanggan</h2>
                <div className='card-container'>
                    <Ulasan/>
                </div>
            </div>
        </div>
    )
}
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Tela0 from '../Telas/Tela0';

const RoutesPG = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tela0 />} />
                
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesPG;
import MenuLeft from "../components/dashboard/MenuLeft";

export default function Servicos(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <MenuLeft/>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col">
                            <h1>Coluna 1</h1>
                        </div>
                        <div className="col">
                            <h1>Coluna2</h1>
                        </div>
                    </div>
            
                </div>
            </div>

        </div>
            )
}
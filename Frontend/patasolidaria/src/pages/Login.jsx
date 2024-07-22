
export default function Login(){
    
    return(
        <>
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                    <h2>Login</h2>
                    <div className="col-md-3">
                    </div>
                    
                    <div className="col-md-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                     
                     
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-md-3 form-check">
                    </div>
                   
            </div>
        </div>
    
    
        </>
    )

}
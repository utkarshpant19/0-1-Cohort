

function Dashboard(){

    return <>
      <Boldify>
        Hi there
      </Boldify>
    </>
}

export function Boldify({children}){

console.log(children);
    return <>
            <h1>{children}</h1>
        </>
    
}

export default Dashboard;
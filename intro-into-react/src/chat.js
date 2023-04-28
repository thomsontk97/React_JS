
function Chat(){

    // function showAlert(){
    //     console.log("Click Completed");
    // }

    var btnStyle = {
        backgroundColor:"#000",
        padding:".3rem",
        border : "none",
        color :"#fff",
        margin : "1rem",
        marginTop:".25rem",
        cursor:"pointer"
    };

    var inptStyle = {
        margin: "1rem",
        marginBottom : "0",
        border:"1px solid #333",
        borderRadius:"5px"
    }

    return (
        <>
        <input type="text" 
        placeholder="Name"
        id="name"
        style={inptStyle}
        onChange={(e) => console.log(e.target.value)}
        >
        </input>
        <br/>
        <button 
        style={btnStyle}
        onClick={() => {
            var username = document.getElementById("name").value;
            alert("Name:",username);
        }}
        onMouseDown={() => console.log("MouseDown")}
        onMouseUp={() => console.log("MouseUp")}
        >Click Me</button>
        </>
    );
}

export default Chat;
let User = () => {
    let name = "Hello";
    let img1 = "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg";
    return <div>
        <h1>User Name : {name}</h1>
        <img src={img1} alt="img"/>
    </div>
}
export default User;
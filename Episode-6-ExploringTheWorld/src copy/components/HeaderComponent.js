export const Title = ()=>{
    return <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdowOPjag-hQKDHQXhyue9wzFdZ9H1hLW09Q&usqp=CAU"></img>;
}

const HeaderComponent = ()=>(
    <nav className="navbar">
      <Title/>
      <ul>
         <li>Home</li>
         <li>About us</li>
         <li>Contact us</li>
         <li>Cart</li>
      </ul>
    </nav>
);

export default HeaderComponent;
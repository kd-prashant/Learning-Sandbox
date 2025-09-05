// Header
function Header({onSort, onSort1500}){
    return (
        <div id="navhead">
            <div id="mainnav">
                <img id="img" src="https://cdn.worldvectorlogo.com/logos/myntra-2.svg" height="50px"  />            
                <div id="options">
                    <button>MEN</button>
                    <button>WOMEN</button>
                    <button>KIDS</button>
                    <button>HOME</button>
                    <button>BEAUTY</button>
                    <button>GENZ</button>
                    <button>STUDIO</button>
                </div>

                <input id="search" type="search" placeholder="Search for products, brands and more"></input>
                
                <div id="user">
                    <button>Profile</button>
                    <button>Wishlist</button>
                    <button>Bag</button>
                </div>
            </div>
            <div id="filter">
                <button id="sortPrice" onClick={onSort}>Price: Low to High</button>
                <button id="above1500" onClick={onSort1500}>Price: Rs.1500+</button>
            </div>
        </div>

    )

}

export default Header;
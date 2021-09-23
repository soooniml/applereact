import './Header.css'

const Header = () =>{
    return(
        <>
            <div class="navBackground back">
                <div class="navCenter">
                    <div class="navInline">
                        <ul class="toggle">
                            <li>
                                <i class="fa fa-bars show"></i>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href=""><i class="fab fa-apple"></i></a>
                            </li>
                        </ul>

                        <ul class="list">

                            <li>
                                <a href="">Store</a>
                            </li>
                            <li>
                                <a href="">Mac</a>
                            </li>
                            <li>
                                <a href="">iPad</a>
                            </li>
                            <li>
                                <a href="">iPhone</a>
                            </li>
                            <li>
                                <a href="">Watch</a>
                            </li>
                            <li>
                                <a href="">TV</a>
                            </li>
                            <li>
                                <a href="">Music</a>
                            </li>
                            <li>
                                <a href="">Support</a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href=""><i class="fas fa-search"></i></a>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <a href=""><i class="fas fa-shopping-bag"></i></a>
                            </li>
                        </ul>
        
                    </div>
                </div>
            </div>
        </>
    )
}


// const back = document.querySelector('.back')

// const toggle = document.querySelector('.show')

// toggle.addEventListener('click' , e =>{
//     e.preventDefault();

//     back.classList.toggle('activeBack')
// })



export default Header;
import { Outlet } from "react-router";
import { NavLink } from "react-router";
import Card from "../Card";

export default function ShopLayout() {
    return (
        <Card>
            <h1>หมวดหมู่สินค้า</h1>
            <div>
                <NavLink to='/shop/electronics'>Electronics</NavLink> |&nbsp; 
                <NavLink to='/shop/clothing'>Clothing</NavLink> |&nbsp;
                <NavLink to='/shop/furniture'>Furniture</NavLink>
            </div>
            <Outlet />
        </Card>
    )
}
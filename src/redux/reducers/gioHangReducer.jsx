const stateGioHang = {
    gioHang:[],
    onShow:false,
}
export const GioHangReducer = (state = stateGioHang, action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG' : {
            let cart = [...state.gioHang];
            const index = cart.findIndex(spGh => spGh.maSP === action.phoneCart.maSP);
            if(index === -1) {
                cart.push(action.phoneCart);
            } else {
                cart[index].soLuong += 1;
            }
            state.gioHang = cart;
            return {...state};
        }
        case 'SHOW_GIO_HANG' : {
            
            //console.log (state.onShow, action.onShow);
            state.onShow = action.onShow;
            return {...state}
        }
        case 'HIDE_GIO_HANG' : {
            state.onShow = action.onHide;
            return {...state}
        }
        case 'TANG' : {
            let cart = [...state.gioHang];
            const index = cart.findIndex(spGh => spGh.maSP === action.id);
            cart[index].soLuong +=1;
            state.gioHang = cart;
            return {...state}
        }
        case 'GIAM' : {
            let cart = [...state.gioHang];
            const index = cart.findIndex(spGh => spGh.maSP === action.id);
            if(cart[index].soLuong <= 1) {
                cart.splice(index,1);
            } else {
                cart[index].soLuong -=1;
            }
            state.gioHang = cart;
            return {...state}
        }
        case 'EMPTY' : {
            state.gioHang = [];
            return {...state};
        }
        default : {
            
        }
    }
    return {...state};
} 
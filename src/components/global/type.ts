export type meal={_id:string,imgeurl:string,price:number,name:string,ingredients:string,type:string,quantity:number}
export type cartmeal={id:string,image_url:string,publisher:string,title:string,quantity:number}
export type user={  username:string,
    password:string,
    email:string,
    adress:string,
    telphone:number,confirmpassword:string}

export type order={address:string,details:string,totalprice:number,state:string,_id:string}

export type oderadmin={address:string,details:string,totalprice:number,state:string,_id:string,username:string,
                          payment:string,telphone:number     
                          }




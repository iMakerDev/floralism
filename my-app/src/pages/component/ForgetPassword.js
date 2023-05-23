import style from '@/styles/login.module.css'
import { useState } from 'react';
import { Modal } from "@nextui-org/react";
import { useMutation } from '@tanstack/react-query';
import m_api from '@/m_api';
export default function ForgetPassword(props) {
    const [type, setType] = useState(0);
    const [email,setEmail]=useState("");
    const [code,setCode]=useState("");
    const [time,setTime]=useState(0);
    const [flag,setFlag]=useState(false);
    const [password,setPassword]=useState("");
    const [repassword,setRepassword]=useState("");
    const sendEmail = useMutation({
        mutationFn: (data) => m_api.sendEmail(data),
        mutationKey: ['sendEmailByForgot'],
    })

    const verCode=useMutation({
        mutationFn:(data)=>m_api.verifyCode(data),
        mutationKey:['verifyCode'],
    })
    const resetPassword=useMutation({
        mutationFn:(data)=>m_api.resetPassword(data),
        mutationKey:['resetPassword'],
    })

    const getEmailCode = () => {
        if(!email.trim()){
            alert("請填寫郵箱以獲取驗證碼")
          return ;
        }
        sendEmail.mutate({ email:email.trim(), event: 'emaillogin' }, {
            onSuccess: () =>{
                alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
            },
            onError: (res) =>{
                //console.log(res);
                alert("發送驗證碼失敗");
            }
        })
        setTime(60);
        setFlag(true);
    }
    
    const _submit=()=>{
       type?verfyCode():reset()
    }

    const reset=()=>{
        resetPassword.mutate({email:email.trim(),password:password.trim(),comfirmPassword:repassword.trim()},{
            onSuccess:async(res)=>{
                let isSuccess=await res.json()
                if(isSuccess.code){
                    alert("重置成功")
                    props.toLogin();
                }else{
                    alert(isSuccess.msg);
                }
            },
            onError:(res)=>{
                alert("重置失敗")
            }
        })
    }

    const verfyCode=()=>{
         verCode.mutate({email:email.trim(),code:code.trim()},{
            onSuccess:async(res)=>{
                let isSuccess=await res.json()
                if(isSuccess.code){
                   setType(1);
                }else{
                    alert(isSuccess.msg);
                }
            },
            onError:(res)=>{
                alert("驗證失敗")
            }
         })
    }
    if (time) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }
    

    return (<Modal
        open={props.visible}
        onClose={() => { props.close(); setType(0); }}
        className={style.login_layout}
        // style={{width:'70%',height:'60%'}}
        width={'70%'}
    // style={{width:window.innerWidth*0.7,height:window.innerHeight*0.6}}

    >
        <Modal.Body>
            <div className={style.login_total} style={{}}>
                <div className={""}>
                    <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
                        <span onClick={()=>{props.close();setType(0)}} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
                    </div>
                   
                    {
                        type === 0 ? <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                             <div style={{ letterSpacing: 2, fontSize: 24 }}>找回密碼</div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='電郵/賬戶' onChange={(e) => setEmail(e.target.value.trim())} value={email} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '5%' }}>
                                {<div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type='text' placeholder='請輸入驗證碼' value={code} onChange={(e) => setCode(e.target.value.trim())} style={{ flex: 1, marginRight: 24 }} className={style.account_input}></input>
                                    <div className={style.send_btn} style={{ width: '25%', textAlign: 'center' }}>
                                        {

                                            time ? <div>{time}秒后重新發送</div> : flag ? <div onClick={getEmailCode}>重新發送</div> : <div onClick={getEmailCode}>獲取驗證碼</div>
                                        }
                                    </div>
                                </div>}
                            </div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='button' onClick={verfyCode} className={style.submit_button} value="提交"></input>
                            </div>
                            <div style={{ marginTop: '5%', paddingLeft: '3%', display: 'flex' }}>
                               <div onClick={() => {
                                    setType(0);
                                    setCode("");
                                    setEmail("");
                                    props.toLogin();
                                }} className={style.changebtn}>前往登錄</div>
                            </div>
                        </div> : <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                        <div style={{ letterSpacing: 2, fontSize: 24 }}>重設密碼</div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='password' placeholder='密碼' value={password} onChange={(e) => setPassword(e.target.value)} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='password' placeholder='确认密碼' value={repassword} onChange={(e) => setRepassword(e.target.value)} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='button' onClick={_submit} className={style.submit_button} value="提交"></input>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Modal.Body>
    </Modal>)
}
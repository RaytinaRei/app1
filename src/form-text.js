import React from 'react';

export default function FormText(){
    const textPswd = React.useRef()
    const textPswd2 = React.useRef()
    const onblurPassword = () => {
        let pswd = textPswd.current.value
        if(pswd !== '' && !pswd.match(/[0-9]/g)){
            textPswd.current.value = ''
            alert('ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น')
        
        }
    }
    const onblurPassword2 = () => {
        if(textPswd2.current.value !== textPswd.current.value){
            textPswd2.current.value = ''
            alert('รหัสผ่านทั้งสองช่องไม่ตรงกัน')
        }
}
return(
    <div className ="mt-4 mx-auto p-3 rounded" style ={{width: '400px', backgroundColor: '#cee'}}> 
    <form>
        <div className="form-group mb-2">
            <label htmlFor="login">ชื่อผู้ใช้ (Login)</label>
            <input type="text" id="login" name ="login" maxLength="20" className="form-control form-control-sm"/>

        </div>
        <div className="form-group mb-2">
            <label htmlFor ="pswd">รหัสผ่าน (Password)</label>
            <input type="password" id="Textpswd" name ="textPswd" maxLength="20" className="form-control form-control-sm" ref={textPswd} onBlur={onblurPassword}/>
            </div>
        <div className="form-group mb-2">
            <label htmlFor ="pswd2">ยืนยันรหัสผ่าน (Confirm Password)</label>
            <input type="password" id="Textpswd2" name ="textPswd2" maxLength="20" className="form-control form-control-sm" ref={textPswd2} onBlur={onblurPassword2}/>
        </div>
        <div className="form-group mb-4">
            <label htmlFor="memo">บันทึกช่วยจำ</label>
            <textarea id ="memo" name ="memo" className="form-control form-control-sm" rows="2" maxLength="200"></textarea>
        </div>
        <div className="text-center"><button type="submit" className="btn btn-sm px-4 btn-primary">OK</button></div>
    </form>

    </div>
)
}
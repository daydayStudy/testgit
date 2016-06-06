//获得焦点触发
function showDesc(obj)
{  
   var id= obj.name;
   document.getElementById(id).style.display="inline";
}
//�����ʧȥ����ʱ�������������Ƿ���Ч
function checkText(obj)
{
   //��ȡ������idֵ
   var id= obj.name;
   var text=document.getElementById(id.toString().toUpperCase()).value;

   //�ж��Ƿ�Ϊ��
   if(text.replace(/\s/g, "")=="")
   {
      document.getElementById(id).innerHTML="输入不能为空";
   }
   else
   {
     //��װ����
     //ȡ����ĸת��Ϊ��д,���಻��
     var firstChar=id.charAt(0).toString().toUpperCase();
     //
     var strsub=id.substring(1,id.length);
     var strMethod="check"+firstChar+strsub+"()";
     var isTrue = eval(strMethod);
     if(isTrue)
     {
         document.getElementById(id).innerHTML="";
     }
   }

   
}
function checkUsername()
{
    //ֻ�򵥵��ж��û���ĳ���
    var id = document.getElementById("USERNAME");
    var username=id.value;    
    if(username.length > 10)
    {
      document.getElementById(id.name).innerHTML = "������û����";
      return false;
    } 
    else
    return true;
}
function checkPassword()
{
    var password = document.getElementById("PASSWORD").value;    
    return true;
}
function checkPassword2()
{
     var id=document.getElementById("PASSWORD");
     var id2=document.getElementById("PASSWORD2");
     var password = id.value;    
     var password2 = id2.value;
     if(password!=password2)
     {
        document.getElementById(id.name).innerHTML="���벻һ��";
        return false;
     }
     return true;    
}
function checkIDNumber()
{
  var id=document.getElementById("IDNUMBER"); 
  var IDNumber =id.value;
  if(IDNumber.length<18||IDNumber.length>19)
  {
    document.getElementById(id.name).innerHTML="���֤�ų�������";
    return false;
  }
  var expr=/([0]{18}[x|y]?)|([1]{18}[x|y]?)/i;
  if(expr.test(IDNumber))
  {
     document.getElementById(id.name).innerHTML="���֤�Ų�����ȫ'0'��ȫ'1'";
     return false;
  }
  return true;
}
function checkPhoneNumber()
{
// ����������ʽ���������ƥ��
   var id=document.getElementById("PHONENUMBER");
   var phone = id.value;     
//ƥ�䵽һ���������ַ��򷵻�false 
   var expr =  /\D/i;
   if(expr.test(phone))
   {
      document.getElementById(id.name).innerHTML="��������������ַ�";
      return false;
   }
   return true;

}
function checkEmail()
{
// ����������ʽ���������ƥ��
   var id =  document.getElementById("EMAIL")
   var email = id.value;    
//����ĸ�����ֿ�ͷ������@,��ĸ������.com��β
   var expr =  /^([0-9]|[a-z])+@([0-9]|[a-z])+(\.[c][o][m])$/i;
   if(!expr.test(email))
   {
      document.getElementById(id.name).innerHTML="����������ʽ����";
      return false;
   }
   return true;
}
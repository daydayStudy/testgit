<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用户注册</title>
<style type="text/css">
  @import "userRegister.css";
</style> 
</head>
<body id="BODY">
<div id="DIV_FORM">
<form method="post" action="url" >
 <table id="TABLE">
    <tbody>
        <tr>
           <td>用户名：</td>
           <td>
              <input name="username"  id="USERNAME" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr>
        <tr>
           <td>密码：</td>
           <td>
             <input name="password" id="PASSWORD" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr> 
        <tr>
           <td>确认密码：</td>
           <td>
             <input name="password2" id="PASSWORD2" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr> 
        <tr>
           <td>身份证号：</td>
           <td>
             <input name="IDNumber" id="IDNUMBER" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr> 
        <tr>
           <td>电话号码：</td>
           <td>
             <input name="phoneNumber" id="PHONENUMBER" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr> 
        <tr>
           <td>Email：</td>
           <td>
               <input name="email" id="EMAIL" type="text" onfocus="showDesc(this)" onblur="checkText(this)"/>
           </td>
        </tr> 
        <tr>
           <td> </td>
           <td align="right">
             <input type="submit" value="确认提交" />
           </td>
        </tr> 
    </tbody>  
    </table>
   <table id="TABLE2" border="0">
       <tr><td><span id="username">请输入用户名</span></td></tr>
       <tr><td><span id="password">请输入密码</span></td></tr>
       <tr><td><span id="password2">请再次输入密码</span></td></tr>
       <tr><td><span id="IDNumber">请输入身份证号码</span></td></tr>
       <tr><td><span id="phoneNumber">请输入电话号码</span></td></tr>
       <tr><td><span id="email">请输入邮箱地址</span></td></tr>
    </table>
</form>
</div>
<script  type="text/javascript"  src="registerCheck.js">
</script>
</body>
</html>
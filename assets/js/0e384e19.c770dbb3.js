"use strict";(self.webpackChunkmanuales=self.webpackChunkmanuales||[]).push([[671],{7876:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var n=i(5893),c=i(1151);const s={},r="Introduccion",o={id:"intro",title:"Introduccion",description:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/documentando/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux | Valet",permalink:"/documentando/docs/Manuales-repo/linux"}},l={},t=[{value:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh",level:3},{value:"Docker + GitLab + SSL",id:"docker--gitlab--ssl",level:3},{value:"Docker | Linux | SSL externo",id:"docker--linux--ssl-externo",level:3},{value:"Linux | Valet",id:"linux--valet",level:3}];function d(e){const a={h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"introduccion",children:"Introduccion"}),"\n",(0,n.jsx)(a.h3,{id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh",children:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Este manual detalla la implementaci\xf3n de un aplicativo, como un facturador, en instancias Linux con Ubuntu 18 o superior, utilizando GitLab. Se proporciona un script que actualiza el sistema, instala herramientas y realiza configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos. Los requisitos incluyen acceso SSH al servidor y la configuraci\xf3n del dominio hacia la instancia."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:'Para la instalaci\xf3n, se clona un fragmento de GitLab, se accede a la carpeta clonada, y se da permisos de ejecuci\xf3n al script. El despliegue se inicia con el comando "./install.sh [dominio]". Durante el proceso, se solicitan credenciales de GitLab y se ofrece la opci\xf3n de instalar SSL gratuito, con instrucciones detalladas para su configuraci\xf3n. Tambi\xe9n se brinda la posibilidad de gestionar actualizaciones autom\xe1ticas mediante la sesi\xf3n de GitLab.'}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Al finalizar el script, se proporcionan datos importantes, como el usuario administrador, la contrase\xf1a, la URL del proyecto, la ubicaci\xf3n en el servidor, y la clave SSH para GitLab (si se selecciona la instalaci\xf3n de SSH). Se incluyen enlaces de inter\xe9s para actualizaciones de SSL, ejecuci\xf3n de script en instalaciones Docker, gesti\xf3n independiente de SSL, y una gu\xeda GitLab con par\xe1metros adicionales."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"docker--gitlab--ssl",children:"Docker + GitLab + SSL"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Este script facilita la implementaci\xf3n de un aplicativo en instancias Linux. Realiza actualizaciones del sistema, instala herramientas y configura un certificado SSL renovable cada 90 d\xedas. Se requiere acceso SSH y la configuraci\xf3n del dominio para la validaci\xf3n del certificado. Durante la ejecuci\xf3n, se crean registros TXT en el dominio para validaci\xf3n en tiempo real. Se proporcionan credenciales y URL del proyecto GitLab al finalizar la instalaci\xf3n."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"docker--linux--ssl-externo",children:"Docker | Linux | SSL externo"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Despu\xe9s de la instalaci\xf3n del aplicativo en instancias Linux, se sugiere evitar la instalaci\xf3n del SSL durante el proceso. Posteriormente, acceder a la ruta de instalaci\xf3n y modificar los par\xe1metros necesarios en el archivo .env. Se deben ejecutar comandos adicionales para eliminar la cach\xe9 de la aplicaci\xf3n. Es crucial habilitar el puerto 443 para permitir el acceso a la herramienta, ya que sin una configuraci\xf3n de SSL, este acceso no estar\xe1 disponible."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"linux--valet",children:"Linux | Valet"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Para instalar un aplicativo en un servidor Linux, se necesitan diversos preparativos, como acceso root y la instalaci\xf3n de PHP 7.2, MySQL, Git, Curl, y Composer. Adem\xe1s, se detallan procedimientos espec\xedficos para configurar PHP 7.2 en Ubuntu. Posteriormente, se instala y configura Valet, se crea un directorio de c\xf3digo, y se clona un repositorio. La configuraci\xf3n del archivo .env es esencial, seguida de comandos para generar claves, instalar paquetes y realizar migraciones."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Se destaca la necesidad de verificar la disponibilidad del puerto :80, detener servicios de Apache si es necesario y asegurarse de que Nginx est\xe9 en ejecuci\xf3n. El resumen concluye con la creaci\xf3n de accesos al aplicativo bajo el dominio Facturadorpro3.test. Este proceso integral prepara el entorno para una implementaci\xf3n exitosa."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>r});var n=i(7294);const c={},s=n.createContext(c);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
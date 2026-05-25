export default function ThemeScript() {
  const code =
    "try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}";
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

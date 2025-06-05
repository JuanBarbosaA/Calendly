import styles from "./ProductMenu.module.css"
  export default function ProductMenu(){ 
    return (
    <div className={styles.menuContent}>
      <div className={styles.menuSection}>
        <div className={styles.menuGroup}>
          <h4 className={styles.menuTitle}>Product</h4>
          <div className={styles.menuItems}>
            <a href="/features/scheduling" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#006BFF" fill-rule="evenodd" d="M5.561 10.94a1.5 1.5 0 0 1 0 2.121l-.75.75a3.803 3.803 0 0 0 5.379 5.379l.75-.75a1.5 1.5 0 1 1 2.121 2.121l-.75.75A6.803 6.803 0 1 1 2.69 11.69l.75-.75a1.5 1.5 0 0 1 2.121 0M18.44 13.061a1.5 1.5 0 0 1 0-2.121l.75-.75A3.803 3.803 0 1 0 13.81 4.81l-.75.75A1.5 1.5 0 1 1 10.94 3.44l.75-.75a6.803 6.803 0 1 1 9.621 9.621l-.75.75a1.5 1.5 0 0 1-2.121 0" clip-rule="evenodd"></path><path fill="#006BFF" fill-rule="evenodd" d="M16.061 7.94a1.5 1.5 0 0 1 0 2.121l-6 6A1.5 1.5 0 1 1 7.94 13.94l6-6a1.5 1.5 0 0 1 2.121 0" clip-rule="evenodd"></path></svg>
              </div>
              <div className={styles.itemContent}>
                <span>Scheduling</span>
                <small>Simplified booking</small>
              </div>
            </a>
            <a href="/features" className={styles.menuItem}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#006BFF" d="M12 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.5 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M13.5 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 19.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M12 16.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M16.5 19.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"></path></svg>
              </div>
              <div className={styles.itemContent}>
                <span>Product overview</span>
                <small>Why choose Calendly</small>
              </div>
            </a>
          </div>
        </div>
        
        <div className={styles.menuGroup}>
          <h4 className={styles.menuTitle}>Platform</h4>
          <div className={styles.menuColumns}>
            <div className={styles.menuColumn}>
              <a href="/integration" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><mask id="integrations_svg__a" fill="#fff"><path d="M7.5 0a.625.625 0 0 1 .625.625V3.75h3.75V.625a.625.625 0 1 1 1.25 0V3.75h1.25a.625.625 0 0 1 .625.625v3.75a4.375 4.375 0 0 1-4.375 4.375 21 21 0 0 1-.05 1.525c-.051.643-.157 1.254-.396 1.78a2.6 2.6 0 0 1-1.213 1.285c-.56.285-1.255.41-2.091.41-1.247 0-2.013.413-2.468.898A2.4 2.4 0 0 0 3.75 20H2.5c0-.77.29-1.709.996-2.46.722-.765 1.83-1.29 3.379-1.29.726 0 1.203-.11 1.523-.274.3-.154.5-.375.642-.687.151-.333.241-.777.288-1.363.033-.425.043-.897.046-1.426A4.375 4.375 0 0 1 5 8.125v-3.75a.625.625 0 0 1 .625-.625h1.25V.625A.625.625 0 0 1 7.5 0M6.25 5v3.125a3.125 3.125 0 0 0 3.125 3.125h1.25a3.125 3.125 0 0 0 3.125-3.125V5z"></path></mask><path fill="currentColor" stroke="currentColor" stroke-width="2.5" d="M7.5 0a.625.625 0 0 1 .625.625V3.75h3.75V.625a.625.625 0 1 1 1.25 0V3.75h1.25a.625.625 0 0 1 .625.625v3.75a4.375 4.375 0 0 1-4.375 4.375 21 21 0 0 1-.05 1.525c-.051.643-.157 1.254-.396 1.78a2.6 2.6 0 0 1-1.213 1.285c-.56.285-1.255.41-2.091.41-1.247 0-2.013.413-2.468.898A2.4 2.4 0 0 0 3.75 20H2.5c0-.77.29-1.709.996-2.46.722-.765 1.83-1.29 3.379-1.29.726 0 1.203-.11 1.523-.274.3-.154.5-.375.642-.687.151-.333.241-.777.288-1.363.033-.425.043-.897.046-1.426A4.375 4.375 0 0 1 5 8.125v-3.75a.625.625 0 0 1 .625-.625h1.25V.625A.625.625 0 0 1 7.5 0ZM6.25 5v3.125a3.125 3.125 0 0 0 3.125 3.125h1.25a3.125 3.125 0 0 0 3.125-3.125V5z" mask="url(#integrations_svg__a)"></path></svg>
                </div>
                <span>Integrations</span>
              </a>
              <a href="/features/mobile-apps" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M14.167 14.334v-.151 2.72c0 .836-.677 1.513-1.512 1.513H4.012A1.51 1.51 0 0 1 2.5 16.904V2.997c0-.835.677-1.512 1.512-1.512h8.643c.835 0 1.512.677 1.512 1.512v1.209M2.5 13.805h11.667"></path><path fill="currentColor" d="M8.33 9.92a.67.67 0 0 0 .47-.07.6.6 0 0 0 .176-.153.5.5 0 0 0 0-.626.6.6 0 0 0-.175-.152.7.7 0 0 0-.227-.079 2.54 2.54 0 0 1-1.104-.494 2.2 2.2 0 0 1-.695-.922 2 2 0 0 1-.108-1.112c.07-.373.244-.724.506-1.018a2.4 2.4 0 0 1 .992-.662c.388-.14.809-.186 1.222-.136s.806.197 1.139.424c.333.228.596.53.763.876q.046.104.133.184a.6.6 0 0 0 .2.121.66.66 0 0 0 .672-.13.55.55 0 0 0 .128-.186.5.5 0 0 0-.02-.43 3.4 3.4 0 0 0-1.145-1.314 3.86 3.86 0 0 0-1.708-.637 4 4 0 0 0-1.834.205 3.65 3.65 0 0 0-1.487.993 3.17 3.17 0 0 0-.76 1.527 3 3 0 0 0 .163 1.669c.211.534.57 1.01 1.044 1.382a3.8 3.8 0 0 0 1.656.741z"></path><path fill="currentColor" d="m12.53 7.358-.179.162a.165.165 0 0 1-.215 0L10.74 6.253a1.57 1.57 0 0 0-.778-.375 1.66 1.66 0 0 0-.876.08 1.5 1.5 0 0 0-.68.507 1.3 1.3 0 0 0-.256.764c0 .181.038.36.115.528.076.167.189.319.33.446l2.083 1.89c-.322.058-.61.22-.812.455a1.16 1.16 0 0 0-.286.826c.018.297.152.58.38.794s.533.348.86.376l2.346.197a.67.67 0 0 0 .453-.12.6.6 0 0 0 .153-.168.514.514 0 0 0-.073-.617.6.6 0 0 0-.189-.135.7.7 0 0 0-.232-.058l-2.347-.196a.16.16 0 0 1-.102-.05.13.13 0 0 1-.035-.1.1.1 0 0 1 .014-.053.13.13 0 0 1 .037-.043.156.156 0 0 1 .114-.029q.566-.013 1.127-.085a.64.64 0 0 0 .315-.112.56.56 0 0 0 .2-.248.5.5 0 0 0 .023-.307.54.54 0 0 0-.162-.27L9.453 7.422a.26.26 0 0 1-.085-.194c0-.072.033-.141.09-.192a.32.32 0 0 1 .211-.08c.08-.001.157.026.214.076l1.933 1.754a.64.64 0 0 0 .43.162.64.64 0 0 0 .43-.162l.716-.649c.27-.234.629-.365 1.002-.365.374 0 .733.131 1.003.365l1.144 1.04a.64.64 0 0 0 .43.16.64.64 0 0 0 .43-.16.53.53 0 0 0 .177-.39.53.53 0 0 0-.178-.39l-1.146-1.04a2.7 2.7 0 0 0-.854-.518 2.86 2.86 0 0 0-2.016 0c-.32.12-.61.296-.854.519"></path></svg>
                </div>
                <span>Mobile app</span>
              </a>
              <a href="/features/browser-extensions" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g stroke="currentColor" stroke-width="1.25" clip-path="url(#browser-extension_svg__a)"><circle cx="10.021" cy="9.967" r="9.142"></circle><path d="M10.184 1.15c6.684 3.851 6.668 13.51 0 17.388M10.02 1.273c-6.683 3.85-6.668 13.51 0 17.387M18.918 9.885H1.205"></path><path d="m3.49 3.926.09.081a9.436 9.436 0 0 0 12.808-.08M3.613 15.925l.088-.08a9.437 9.437 0 0 1 12.809.08M10.02 1.15v17.632"></path></g><defs><clipPath id="browser-extension_svg__a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                </div>
                <span>Browser extension</span>
              </a>
            </div>
            
            <div className={styles.menuColumn}>
              <a href="/features/admin-management" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 1.878c.263 0 .506.141.637.37l3.356 5.873 3.999-1.599a.735.735 0 0 1 .993.826l-1.69 8.446a1.65 1.65 0 0 1-1.62 1.329H4.324a1.65 1.65 0 0 1-1.621-1.33l-1.69-8.445a.735.735 0 0 1 .994-.826l3.998 1.6 3.356-5.874a.74.74 0 0 1 .638-.37m0 2.215L6.963 9.406a.735.735 0 0 1-.911.317L2.72 8.39l1.423 7.116a.184.184 0 0 0 .18.147h11.352a.184.184 0 0 0 .18-.147l1.423-7.116-3.332 1.333a.735.735 0 0 1-.911-.317z" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M9.875 9.959c.483 0 .875.411.875.918v2.755c0 .508-.392.919-.875.919S9 14.139 9 13.632v-2.755c0-.507.392-.918.875-.918" clip-rule="evenodd"></path></svg>
                </div>
                <span>Admin controls</span>
              </a>
              <a href="/security" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M1.875 3.27v6.344a9.92 9.92 0 0 0 6.36 9.261l.868.333a2.5 2.5 0 0 0 1.795 0l.867-.333a9.92 9.92 0 0 0 6.36-9.26V3.268a1.24 1.24 0 0 0-.723-1.135A18.1 18.1 0 0 0 10 .625a18.1 18.1 0 0 0-7.402 1.51 1.24 1.24 0 0 0-.723 1.134"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M6.25 8.125h7.5v6.25h-7.5zM10 4.375a2.5 2.5 0 0 0-2.5 2.5v1.25h5v-1.25a2.5 2.5 0 0 0-2.5-2.5"></path><path fill="currentColor" d="M10 10.962a.313.313 0 1 1 0 .626.313.313 0 0 1 0-.626"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 10.962a.313.313 0 1 1 0 .626.313.313 0 0 1 0-.626"></path></svg>
                </div>
                <span>Security</span>
              </a>
              <a href="/features/analytics" className={styles.submenuItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M.625 19.375h18.75M5 14.375H2.5a.625.625 0 0 0-.625.625v4.375h3.75V15A.625.625 0 0 0 5 14.375M11.25 8.125h-2.5a.625.625 0 0 0-.625.625v10.625h3.75V8.75a.625.625 0 0 0-.625-.625M17.5 10.625H15a.624.624 0 0 0-.625.625v8.125h3.75V11.25a.624.624 0 0 0-.625-.625M19.375 4.375V.625h-3.75"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="m19.375.625-4.208 4.208a1.87 1.87 0 0 1-1.864.47L8.545 4.032a1.88 1.88 0 0 0-1.81.486l-4.86 4.86"></path></svg>
                </div>
                <span>Analytics</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
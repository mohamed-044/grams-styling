/**
 * MyAccountPage — Page mon compte (placeholder).
 *
 * Page statique invitant l'utilisateur à se connecter
 * pour gérer ses commandes.
 */
export default function MyAccountPage() {
  return (
    <div className="container" style={{padding:"40px 20px"}}>
      <h1 style={{fontSize:"24px",fontWeight:700,marginBottom:"16px",borderBottom:"2px solid #c8102e",display:"inline-block",paddingBottom:"8px"}}>
        My Account
      </h1>
      <p style={{color:"#555",marginTop:"16px"}}>Sign in to manage your orders.</p>
    </div>
  );
}

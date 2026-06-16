/**
 * ContactUsPage — Page de contact statique.
 *
 * Affiche l'adresse email de contact. Page serveur simple.
 */
export default function ContactUsPage() {
  return (
    <div className="container" style={{padding:"40px 20px"}}>
      <h1 style={{fontSize:"24px",fontWeight:700,marginBottom:"16px",borderBottom:"2px solid #c8102e",display:"inline-block",paddingBottom:"8px"}}>
        Contact Us
      </h1>
      <p style={{color:"#555",marginTop:"16px"}}>Email us at info@gramsstyling.co.uk</p>
    </div>
  );
}

import styles from './SideBarFooter.module.scss';

/** Footer for the sidebar menu. */
export default function SideBarFooter() {
  return (
    <>
      <div className={styles.footerBlock}>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className={styles.footerBlock}>
        <div>Terms Privacy</div>
        <div>Policy &amp; Safety</div>
        <div>Test new features</div>
      </div>
      <div className={styles.footerBlock}>
        <div>All prices include VAT</div>
      </div>
      <div className={styles.footerBlock}>
        <div>A YouTube clone for educational purposes under fair use. Based on tutorial by Productioncoder.com</div>
      </div>
    </>
  );
}
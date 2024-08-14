
import React from 'react';
import styles from './contactus.module.css';

export default function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact</h1>

        <form
          id="contact-form"
          action="https://formspree.io/f/mgegbrvr"
          method="post"
          className={styles.form}
        >
          <div className={styles.fields}>
            <div className={styles.field}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.field}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              id="sub"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className={styles.field}>
            <textarea
              name="message"
              placeholder="Message.."
              required
            ></textarea>
          </div>
          <div className={styles.buttonArea}>
            <button type="submit" className={styles.submitButton}>Send Message</button>
            <button type="reset" className={styles.resetButton}>Clear Field</button>
          </div>
        </form>

        <div className={styles.additionalInfo}>
          <p>Questions or comments? Want more Homemade Recipes?</p>
          <p>
            If you have questions or comments about RecipeFinder, or would like to give me feedback,
            I would love to hear from you.
          </p>
          <p>
            I welcome suggestions as well as future recipe ideas.  Have trouble finding a good recipe
            for a dish you’d like to make? Just let me know. I also love seeing pictures of anything you have tried from my site.
          </p>
          <p>
            For technical issues related to the site or any orders you have placed, email me at{' '}
            <a href="mailto:amrutamehare53@gmail.com">amrutamehare53@gmail.com</a>.
          </p>
        </div>

        <div className={styles.socialMenu}>
          <ul>
            <li><a href="https://github.com/Amruta-Mehare" target="_blank"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/amrutamehare" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://wa.me/7410751570" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

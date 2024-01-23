/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:31:45
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-23 10:13:24
 * @FilePath: /ticket/app/privacy/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { createSupaHandler } from '@/libs/supabase';
import Article from '@/components/posts/Article';

export const revalidate = 60;
export const metadata = {
	title: '隐私政策',
	description: 'privacy!'
};

export default async function Privacy() {
	const config = await createSupaHandler().getAppConfig();
	const domain = config.metas.domain;
	const email = config.metas.email;
	return (
		<Article>
      <h2>Privacy</h2>
			<ol>
				<li>
					<h3>Introduction</h3>
					<ol>
						<li>We are committed to safeguarding the privacy of our website visitors and service users.</li>
						<li>
							This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and
							service users; in other words, where we determine the purposes and means of the processing of that personal data.
						</li>
						<li>
							We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of our website and
							services, we will ask you to consent to our use of cookies when you first visit our website.
						</li>
					</ol>
				</li>
				<li>
					<h3>Credit</h3>
					<ol>
						<li>
							<em>
								You must retain the above credit. Use of this document without the credit is an infringement of copyright. However, you can
								purchase from us an equivalent document that does not include the credit.
							</em>
						</li>
					</ol>
				</li>
				<li>
					<h3>How we use your personal data</h3>
					<ol>
						<li>
							In this Section 3 we have set out:
							<ol>
								<li>the general categories of personal data that we may process;</li>
								<li>
									in the case of personal data that we did not obtain directly from you, the source and specific categories of that data;
								</li>
								<li>the purposes for which we may process personal data; and</li>
								<li>the legal bases of the processing.</li>
							</ol>
						</li>
						<li>
							We may process any of your personal data identified in this policy where necessary for the establishment, exercise or defence
							of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis for this
							processing is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights and the
							legal rights of others.
						</li>
						<li>
							We may process any of your personal data identified in this policy where necessary for the purposes of obtaining or
							maintaining insurance coverage, managing risks, or obtaining professional advice. The legal basis for this processing is our
							legitimate interests, namely the proper protection of our business against risks.
						</li>
						<li>
							In addition to the specific purposes for which we may process your personal data set out in this Section 3, we may also
							process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are
							subject, or in order to protect your vital interests or the vital interests of another natural person.
						</li>
						<li>Please do not supply any other person&apos;s personal data to us, unless we prompt you to do so.</li>
					</ol>
				</li>
				<li>
					<h3>Providing your personal data to others</h3>
					<ol>
						<li>
							We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the
							purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment,
							exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.
						</li>
						<li>
							In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where
							such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital
							interests or the vital interests of another natural person. We may also disclose your personal data where such disclosure is
							necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or
							out-of-court procedure.
						</li>
					</ol>
				</li>
				<li>
					<h3>International transfers of your personal data</h3>
					<ol>
						<li>
							In this Section 5, we provide information about the circumstances in which your personal data may be transferred to countries
							outside the European Economic Area (EEA).
						</li>
						<li>
							You acknowledge that personal data that you submit for publication through our website or services may be available, via the
							internet, around the world. We cannot prevent the use (or misuse) of such personal data by others.
						</li>
					</ol>
				</li>
				<li>
					<h3>Retaining and deleting personal data</h3>
					<ol>
						<li>
							This Section 6 sets out our data retention policies and procedure, which are designed to help ensure that we comply with our
							legal obligations in relation to the retention and deletion of personal data.
						</li>
						<li>
							Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or
							those purposes.
						</li>
						<li>
							Notwithstanding the other provisions of this Section 6, we may retain your personal data where such retention is necessary for
							compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests
							of another natural person.
						</li>
					</ol>
				</li>
				<li>
					<h3>Your rights</h3>
					<ol>
						<li>In this Section 7, we have listed the rights that you have under data protection law.</li>
						<li>
							Your principal rights under data protection law are:
							<ol>
								<li>the right to access - you can ask for copies of your personal data;</li>
								<li>
									the right to rectification - you can ask us to rectify inaccurate personal data and to complete incomplete personal data;
								</li>
								<li>the right to erasure - you can ask us to erase your personal data;</li>
								<li>the right to restrict processing - you can ask use to restrict the processing of your personal data;</li>
								<li>the right to object to processing - you can object to the processing of your personal data;</li>
								<li>the right to data portability - you can ask that we transfer your personal data to another organisation or to you;</li>
								<li>the right to complain to a supervisory authority - you can complain about our processing of your personal data; and</li>
								<li>
									the right to withdraw consent - to the extent that the legal basis of our processing of your personal data is consent, you
									can withdraw that consent.
								</li>
							</ol>
						</li>
						<li>
							These rights are subject to certain limitations and exceptions. You can learn more about the rights of data subjects by
							visiting{' '}
							<a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/">
								https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/
							</a>
							.
						</li>
						<li>
							You may exercise any of your rights in relation to your personal data by written notice to us, using the contact details set
							out below.
						</li>
					</ol>
				</li>
				<li>
					<h3>About cookies</h3>
					<ol>
						<li>
							A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser
							and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the
							server.
						</li>
						<li>
							Cookies may be either &quot;persistent&quot; cookies or &quot;session&quot; cookies: a persistent cookie will be stored by a
							web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session
							cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
						</li>
						<li>
							Cookies do not typically contain any information that personally identifies a user, but personal data that we store about you
							may be linked to the information stored in and obtained from cookies.
						</li>
					</ol>
				</li>
				<li>
					<h3>Cookies used by our service providers</h3>
					<ol>
						<li>Our service providers use cookies and those cookies may be stored on your computer when you visit our website.</li>
						<li>
							We use Google Analytics. Google Analytics gathers information about the use of our website by means of cookies. The
							information gathered is used to create reports about the use of our website. You can find out more about Google&apos;s use of
							information by visiting{' '}
							<a href="https://www.google.com/policies/privacy/partners/">https://www.google.com/policies/privacy/partners/</a> and you can
							review Googles privacy policy at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>. The
							relevant cookies are: <em>[identify cookies]</em>.
						</li>
						<li>
							We use <em>[identify service provider]</em> to <em>[specify service]</em>. This service uses cookies for{' '}
							<em>[specify purpose(s)]</em>. You can view the privacy policy of this service provider at <em>[URL]</em>. The relevant
							cookies are: <em>[identify cookies]</em>.
						</li>
					</ol>
				</li>
				<li>
					<h3>Managing cookies</h3>
					<ol>
						<li>
							Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to
							browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via
							these links:
							<ol>
								<li>
									<a href="https://support.google.com/chrome/answer/95647">https://support.google.com/chrome/answer/95647</a> (Chrome);
								</li>
								<li>
									<a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
										https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
									</a>{' '}
									(Firefox);
								</li>
								<li>
									<a href="https://help.opera.com/en/latest/security-and-privacy/">
										https://help.opera.com/en/latest/security-and-privacy/
									</a>{' '}
									(Opera);
								</li>
								<li>
									<a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
										https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
									</a>{' '}
									(Internet Explorer);
								</li>
								<li>
									<a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
										https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
									</a>{' '}
									(Safari); and
								</li>
								<li>
									<a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">
										https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
									</a>{' '}
									(Edge).
								</li>
							</ol>
						</li>
						<li>Blocking all cookies will have a negative impact upon the usability of many websites.</li>
						<li>If you block cookies, you will not be able to use all the features on our website.</li>
					</ol>
				</li>
				<li>
					<h3>Amendments</h3>
					<ol>
						<li>We may update this policy from time to time by publishing a new version on our website.</li>
						<li>You should check this page occasionally to ensure you are happy with any changes to this policy.</li>
					</ol>
				</li>
				<li>
					<h3>Our details</h3>
					<ol>
						<li>
							This website is owned and operated by <em>{domain}</em>.
						</li>
					</ol>
				</li>
				<li>
					<h3>Data protection officer</h3>
					<ol>
						<li>
							Our data protection officer&apos;s contact details are:{' '}
							<em>
								<a type="primary" href={`mailto:${email}`}>
									{email}
								</a>
							</em>
							.
						</li>
					</ol>
				</li>
			</ol>
		</Article>
	);
}

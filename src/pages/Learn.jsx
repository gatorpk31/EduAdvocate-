import { useState } from 'react';
import { DisclaimerBanner } from '../components/Disclaimer';

export default function Learn() {
  const [tab, setTab] = useState('iep');

  return (
    <div className="page learn-page">
      <DisclaimerBanner />
      <h1>Learning Center</h1>
      <p>
        Understand the difference between IEP and 504 plans, your rights as a parent, and how
        federal law protects students with disabilities.
      </p>

      <div className="tabs" role="tablist" aria-label="Plan type education">
        <button
          role="tab"
          aria-selected={tab === 'iep'}
          aria-controls="panel-iep"
          id="tab-iep"
          onClick={() => setTab('iep')}
          className={tab === 'iep' ? 'tab active' : 'tab'}
        >
          IEP (IDEA)
        </button>
        <button
          role="tab"
          aria-selected={tab === '504'}
          aria-controls="panel-504"
          id="tab-504"
          onClick={() => setTab('504')}
          className={tab === '504' ? 'tab active' : 'tab'}
        >
          504 Plan
        </button>
        <button
          role="tab"
          aria-selected={tab === 'compare'}
          aria-controls="panel-compare"
          id="tab-compare"
          onClick={() => setTab('compare')}
          className={tab === 'compare' ? 'tab active' : 'tab'}
        >
          Comparison
        </button>
      </div>

      {tab === 'iep' && (
        <section id="panel-iep" role="tabpanel" aria-labelledby="tab-iep">
          <h2>Individualized Education Program (IEP)</h2>
          <p>
            Under the Individuals with Disabilities Education Act (IDEA, 20 U.S.C. § 1400 et seq.),
            students who qualify under one of 13 disability categories are entitled to a Free
            Appropriate Public Education (FAPE) through an Individualized Education Program.
          </p>

          <h3>What is IDEA?</h3>
          <p>
            IDEA is a federal law that requires public schools to provide special education and
            related services to eligible students with disabilities. The law mandates that these
            services be provided at no cost to families and in the Least Restrictive Environment
            (LRE) appropriate for the student (34 CFR §300.114).
          </p>

          <h3>13 Disability Categories Under IDEA</h3>
          <p>
            Under 34 CFR §300.8, a child must have one of the following disabilities and, by reason
            thereof, need special education and related services:
          </p>
          <ol>
            <li>Autism</li>
            <li>Deaf-blindness</li>
            <li>Deafness</li>
            <li>Emotional disturbance</li>
            <li>Hearing impairment</li>
            <li>Intellectual disability</li>
            <li>Multiple disabilities</li>
            <li>Orthopedic impairment</li>
            <li>Other health impairment</li>
            <li>Specific learning disability</li>
            <li>Speech or language impairment</li>
            <li>Traumatic brain injury</li>
            <li>Visual impairment including blindness</li>
          </ol>

          <h3>Required IEP Components (34 CFR §300.320)</h3>
          <ul>
            <li>Present levels of academic achievement and functional performance</li>
            <li>Measurable annual goals</li>
            <li>Description of how progress toward goals will be measured</li>
            <li>Statement of special education and related services</li>
            <li>Explanation of the extent the child will not participate with nondisabled children</li>
            <li>Accommodations for state and district assessments</li>
            <li>Projected dates for beginning of services, frequency, location, and duration</li>
            <li>Transition services (beginning no later than age 16, per 34 CFR §300.320(b))</li>
          </ul>

          <h3>Parent Rights Under IDEA</h3>
          <p>
            Under IDEA (34 CFR §300.322), parents have the right to:
          </p>
          <ul>
            <li>Participate as equal members of the IEP team (34 CFR §300.321)</li>
            <li>Receive prior written notice of any proposed changes (34 CFR §300.503)</li>
            <li>Give or withhold consent for evaluations and services (34 CFR §300.300)</li>
            <li>Access their child&apos;s educational records (34 CFR §300.613)</li>
            <li>Request an Independent Educational Evaluation (IEE) at public expense (34 CFR §300.502)</li>
            <li>File a state complaint or request due process (34 CFR §300.507, §300.153)</li>
          </ul>
        </section>
      )}

      {tab === '504' && (
        <section id="panel-504" role="tabpanel" aria-labelledby="tab-504">
          <h2>Section 504 Plan</h2>
          <p>
            Section 504 of the Rehabilitation Act of 1973 (29 U.S.C. § 794) is a federal civil
            rights law that prohibits discrimination against individuals with disabilities in
            programs receiving federal financial assistance.
          </p>

          <h3>Eligibility Under Section 504</h3>
          <p>
            Under 34 CFR Part 104, a student is eligible for a 504 plan if they have a physical or
            mental impairment that substantially limits one or more major life activities. Major life
            activities include learning, reading, concentrating, thinking, communicating, seeing,
            hearing, walking, breathing, and caring for oneself.
          </p>

          <h3>504 Plan vs. IEP</h3>
          <p>
            A 504 plan provides accommodations and modifications to ensure equal access to education.
            Unlike an IEP under IDEA, a 504 plan does not require specialized instruction — it
            removes barriers to learning through accommodations.
          </p>

          <h3>Parent Rights Under Section 504</h3>
          <p>
            Under 34 CFR §104.36, parents have the right to:
          </p>
          <ul>
            <li>Be notified about identification, evaluation, and placement decisions</li>
            <li>Have their child evaluated before initial placement or significant change</li>
            <li>Examine relevant records</li>
            <li>Request an impartial hearing regarding identification, evaluation, or placement</li>
            <li>File a complaint with the Office for Civil Rights (OCR)</li>
          </ul>

          <h3>OCR Complaint Process</h3>
          <p>
            If a school district violates Section 504, parents may file a complaint with the U.S.
            Department of Education&apos;s Office for Civil Rights. Complaints can be filed
            online at{' '}
            <a href="https://ocrcas.ed.gov/" target="_blank" rel="noopener noreferrer">
              https://ocrcas.ed.gov/
            </a>.
          </p>
        </section>
      )}

      {tab === 'compare' && (
        <section id="panel-compare" role="tabpanel" aria-labelledby="tab-compare">
          <h2>IEP vs. 504 Plan Comparison</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">IEP (IDEA)</th>
                  <th scope="col">504 Plan (Section 504)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Federal Law</th>
                  <td>IDEA (20 U.S.C. § 1400)</td>
                  <td>Section 504 (29 U.S.C. § 794)</td>
                </tr>
                <tr>
                  <th scope="row">Eligibility</th>
                  <td>13 specific disability categories + need for specialized instruction</td>
                  <td>Any physical or mental impairment substantially limiting a major life activity</td>
                </tr>
                <tr>
                  <th scope="row">Purpose</th>
                  <td>Provide FAPE through specialized instruction</td>
                  <td>Provide equal access through accommodations</td>
                </tr>
                <tr>
                  <th scope="row">Written Plan</th>
                  <td>Required by law (34 CFR §300.320)</td>
                  <td>Not federally required but strongly recommended by OCR</td>
                </tr>
                <tr>
                  <th scope="row">Goals</th>
                  <td>Measurable annual goals required</td>
                  <td>Not required</td>
                </tr>
                <tr>
                  <th scope="row">Funding</th>
                  <td>Federal funding through IDEA</td>
                  <td>No additional federal funding</td>
                </tr>
                <tr>
                  <th scope="row">Complaint Process</th>
                  <td>State complaint or due process hearing</td>
                  <td>OCR complaint or impartial hearing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

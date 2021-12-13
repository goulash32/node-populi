module.exports = {
  getAcademicTerms: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<academic_term>
		<termid>1111</termid>
		<name>Fall</name>
		<fullname>2010-2011: Fall</fullname>
		<start_date>2010-08-15</start_date>
		<end_date>2010-12-18</end_date>
		<type>STANDARD_TERM</type>
		<yearid>222</yearid>
		<start_year>2010</start_year>
		<end_year>2011</end_year>
		<nonstandard>0</nonstandard>
	</academic_term>
	<academic_term>
		<termid>4444</termid>
		<name>Spring</name>
		<fullname>2010-2011: Spring</fullname>
		<start_date>2011-01-15</start_date>
		<end_date>2011-05-18</end_date>
		<type>STANDARD_TERM</type>
		<yearid>222</yearid>
		<start_year>2010</start_year>
		<end_year>2011</end_year>
		<nonstandard>0</nonstandard>
  </academic_term>
</response>
  `,
  getAcademicYears: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<academic_year>
		<yearid>111</yearid>
		<start_year>1901</start_year>
		<end_year>1902</end_year>
	</academic_year>
	<academic_year>
		<yearid>222</yearid>
		<start_year>1902</start_year>
		<end_year>1903</end_year>
	</academic_year>
</response>
  `,
  getAidApplication: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<aid_application>
		<id>65</id>
		<student_id>1000</student_id>
		<aid_year_id>6</aid_year_id>
		<aid_year_name>2009-2010</aid_year_name>
		<assigned_to_id>0</assigned_to_id>
		<assigned_to_name></assigned_to_name>
		<dependency></dependency>
		<student_aid_class_id></student_aid_class_id>
		<student_aid_class_name></student_aid_class_name>
		<program_months>9</program_months>
		<enrollment>FULL_TIME</enrollment>
		<year_coa>555.55</year_coa>
		<program_coa>0.00</program_coa>
		<year_efc>0.00</year_efc>
		<program_efc>0.00</program_efc>
		<student_agi>0.00</student_agi>
		<parents_agi>0.00</parents_agi>
		<auto_zero_efc>0</auto_zero_efc>
		<fisap_total_income>0.00</fisap_total_income>
		<legal_residence_state></legal_residence_state>
		<need>0</need>
		<housing></housing>
		<status>SETUP</status>
		<verification>SELECTED_BY_GOVERNMENT</verification>
		<verification_status>IN_PROGRESS</verification_status>
		<verification_group></verification_group>
		<verification_exempt_reason></verification_exempt_reason>
		<added_by_id>1257</added_by_id>
		<added_at>2014-12-17 10:47:56</added_at>
		<last_isir_id>1234</last_isir_id>
		<isir_veteran/>
	</aid_application>
</response>
  `,
  getAidApplicationForStudentAidYear: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<aid_application>
		<id>65</id>
		<student_id>1000</student_id>
		<aid_year_id>6</aid_year_id>
		<aid_year_name>2009-2010</aid_year_name>
		<assigned_to_id>0</assigned_to_id>
		<assigned_to_name></assigned_to_name>
		<dependency></dependency>
		<student_aid_class_id></student_aid_class_id>
		<student_aid_class_name></student_aid_class_name>
		<program_months>9</program_months>
		<enrollment>FULL_TIME</enrollment>
		<year_coa>555.55</year_coa>
		<program_coa>0.00</program_coa>
		<year_efc>0.00</year_efc>
		<program_efc>0.00</program_efc>
		<student_agi>0.00</student_agi>
		<parents_agi>0.00</parents_agi>
		<auto_zero_efc>0</auto_zero_efc>
		<fisap_total_income>0.00</fisap_total_income>
		<legal_residence_state></legal_residence_state>
		<need>0</need>
		<housing></housing>
		<status>SETUP</status>
		<verification>SELECTED_BY_GOVERNMENT</verification>
		<verification_status>IN_PROGRESS</verification_status>
		<verification_group></verification_group>
		<verification_exempt_reason></verification_exempt_reason>
		<added_by_id>1257</added_by_id>
		<added_at>2014-12-17 10:47:56</added_at>
		<last_isir_id>1234</last_isir_id>
		<isir_veteran/>
	</aid_application>
</response>
  `,
  getApplication: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<application>
		<id>54321</id>
		<lead_id>3214</lead_id>
		<lead_active>1</lead_active>
		<lead_status>ACCEPTED</lead_status>
		<person_id>1234</person_id>
		<first_name>Carl</first_name>
		<preferred_name></preferred_name>
		<middle_name>Allen</middle_name>
		<last_name>Michaelson</last_name>
		<gender>MALE</gender>
		<email>carl@email.org</email>
		<application_template_id>112</application_template_id>
		<application_template_name>Basic</application_template_name>
		<representative_id>2068</representative_id>
		<program_id>333</program_id>
		<program_name>Undergraduate</program_name>
		<degree_seeking>1</degree_seeking>
		<degree_id>444</degree_id>
		<degree_abbreviation>B.A.</degree_abbreviation>
		<degree_name>Bachelor of Arts</degree_name>
		<specialization_id>5555</specialization_id>
		<specialization_abbreviation>ENG</specialization_abbreviation>
		<specialization_name>English</specialization_name>
		<academic_term_id>7769</academic_term_id>
		<academic_term_name>2014-2015: Fall</academic_term_name>
		<expected_enrollment>FULL_TIME</expected_enrollment>
		<full_time>1</full_time>
		<started_on>2014-02-07</started_on>
		<submitted_at></submitted_at>
		<decision_on></decision_on>
		<withdrawn_on></withdrawn_on>
		<submitted_type>ONLINE</submitted_type>
		<provisional>0</provisional>
		<provisional_comment></provisional_comment>
		<fee_status>PAID</fee_status>
		<fee_id>8467</fee_id>
		<fee_amount>25.00</fee_amount>
		<fee_payment>BEFORE_START</fee_payment>
		<sales_receipt_id>12365789</sales_receipt_id>
		<transaction_id>549873215</transaction_id>
		<applicant_activity_at>2014-02-10 15:46:35</applicant_activity_at>
		<num_days_since_last_activity>3</num_days_since_last_activity>
		<staff_activity_at>2014-02-10 16:10:45</staff_activity_at>
		<percent_completed>95</percent_completed>
		<status>IN_PROGRESS</status>
		<sections>
			<heading>
				<content>Personal Information</content>
				<order_id>1</order_id>
			</heading>
			<text>
				<content>Tell us about yourself.</content>
				<order_id>2</order_id>
				<files>
					<file>
						<file_id>9355</file_id>
						<name>terms.pdf</name>
					</file>
				</files>
			</text>
			<field>
				<id>19</id>
				<application_template_field_id>4</application_template_field_id>
				<name>Home Address</name>
				<description></description>
				<is_required>1</is_required>
				<data_type>ADDRESS</data_type>
				<data_format></data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>3</order_id>
				<answer>
					<street>123 Any St</street>
					<city>Anytown</city>
					<state>ID</state>
					<state_name>Idaho</state_name>
					<zip>12345</zip>
					<country_abbreviation>US</country_abbreviation>
					<country_name>United States of America</country_name>
				</answer>
			</field>
			<field>
				<id>20</id>
				<application_template_field_id>5</application_template_field_id>
				<name>SSN</name>
				<description>Please enter your social security number.</description>
				<is_required>0</is_required>
				<data_type>NUMBER</data_type>
				<data_format>SOCIAL_SECURITY_NUMBER</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>4</order_id>
				<answer>111-11-1111</answer>
			</field>
			<field>
				<id>21</id>
				<application_template_field_id>6</application_template_field_id>
				<name>Hobbies and Interests</name>
				<description>Choose any two of the following options.</description>
				<is_required>1</is_required>
				<data_type>MULTIPLE_ANSWER</data_type>
				<data_format></data_format>
				<max_multiple_answers>5</max_multiple_answers>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>5</order_id>
				<answer>
					<options>
						<option>
							<id>527</id>
							<name>Football</name>
						</option>
						<option>
							<id>528</id>
							<name>Baseball</name>
						</option>
						...
					</options>
				</answer>
			</field>
			<field>
				<id>22</id>
				<application_template_field_id>7</application_template_field_id>
				<name>Race and Ethnicity</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>CHOICE</data_type>
				<data_format>RACE_ETHNICITY</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>6</order_id>
				<answer>
					<hispanic_latino>0</hispanic_latino>
					<races>
						<race>
							<id>1</id>
							<name>American Indian or Alaska Native</name>
						</race>
						...
					</races>
				</answer>
			</field>
			<field>
				<id>23</id>
				<application_template_field_id>8</application_template_field_id>
				<name>Education Level</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>CHOICE</data_type>
				<data_format>EDUCATION_LEVEL</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>7</order_id>
				<answer>
					<education_level_id>3333</education_level_id>
					<education_level_name>High School Diploma</education_level_name>
				</answer>
			</field>
			<field>
				<id>24</id>
				<application_template_field_id>9</application_template_field_id>
				<name>Upload your admissions essay</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>FILE</data_type>
				<data_format></data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>8</order_id>
				<answer>
					<file_id>456987456</file_id>
					<file_name>admissions_essay.pdf</file_name>
				</answer>
			</field>
			<field>
				<id>25</id>
				<application_template_field_id>10</application_template_field_id>
				<name>SAT score</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>STANDARDIZED_TEST</data_type>
				<data_format></data_format>
				<status>IN_PROGRESS</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>9</order_id>
				<answer>
					<test_id>1</test_id>
					<test_name>SAT</test_name>
					<test_date>2014-01-07</test_date>
					<test_score>1400</test_score>
					<test_sections>
						<test_section>
							<id>1</id>
							<name>Math</name>
							<score>680</score>
						</test_section>
						<test_section>
							<id>2</id>
							<name>Evidence-Based Reading and Writing</name>
							<score>700</score>
						</test_section>
						...
					</test_sections>
				</answer>
			</field>
			<field>
				<id>26</id>
				<application_template_field_id>11</application_template_field_id>
				<name>Citizenship</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>CHOICE</data_type>
				<data_format>COUNTRY</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>10</order_id>
				<answer>
					<abbreviation>US</abbreviation>
					<name>United States of America</name>
				</answer>
			</field>
			<field>
				<id>27</id>
				<application_template_field_id>12</application_template_field_id>
				<name>State/Province</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>CHOICE</data_type>
				<data_format>STATE_PROVINCE</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>11</order_id>
				<answer>
					<state>AL</state>
					<state_name>Alabama</state_name>
					<country_abbreviation>US</country_abbreviation>
					<country_name>United States of America</country_name>
				</answer>
			</field>
			<field>
				<id>28</id>
				<application_template_field_id>13</application_template_field_id>
				<name>High School GPA</name>
				<description></description>
				<is_required>0</is_required>
				<data_type>CHOICE</data_type>
				<data_format></data_format>
				<status>IN_PROGRESS</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>12</order_id>
				<answer>
					<option_id>8976541</option_id>
					<option_name>3.0 - 3.5</option_name>
				</answer>
			</field>
			<field>
				<id>29</id>
				<application_template_field_id>14</application_template_field_id>
				<name>Degree</name>
				<description></description>
				<is_required>1</is_required>
				<data_type>CHOICE</data_type>
				<data_format>DEGREE</data_format>
				<status>SUBMITTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>13</order_id>
				<answer>
					<degree_id>444</degree_id>
					<degree_abbreviation>B.A.</degree_abbreviation>
					<degree_name>Bachelor of Arts</degree_name>
				</answer>
			</field>
			<field>
				<id>30</id>
				<application_template_field_id>15</application_template_field_id>
				<name>Specialization</name>
				<description></description>
				<is_required>1</is_required>
				<data_type>CHOICE</data_type>
				<data_format>SPECIALIZATION</data_format>
				<status>SUBMITTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>14</order_id>
				<answer>
					<specialization_id>5555</specialization_id>
					<specialization_abbreviation>ENG</specialization_abbreviation>
					<specialization_name>English</specialization_name>
				</answer>
			</field>
			<field>
				<id>31</id>
				<application_template_field_id>16</application_template_field_id>
				<name>Reference</name>
				<description></description>
				<is_required>1</is_required>
				<data_type>ONLINE_REFERENCE</data_type>
				<data_format>REFERENCE</data_format>
				<status>ACCEPTED</status>
				<submitted_at>2014-02-10 15:46:35</submitted_at>
				<decision_at>2014-02-10 16:10:45</decision_at>
				<order_id>15</order_id>
				<answer>
					<online_reference_status>RECEIVED</online_reference_status>
					<online_reference_id>549873541</online_reference_id>
					<online_reference_email>reference@email.org</online_reference_email>
					<online_reference_message>Personal note to referrer.</online_reference_message>
				</answer>
			</field>
		</sections>
		<notes>
			<note>
				<id>5579</id>
				<content>The student is especially interested in classes from Dr. Thompson.</content>
				<public>0</public>
				<added_by>338590</added_by>
				<added_at>2014-01-15 14:42:25</added_at>
				<file_id>774481</file_id>
				<file_name>note.pdf</file_name>
			</note>
		</notes>
	</application>
</response>
  `,
  getApplicationFieldOptions: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<application_field_options>
		<option>
			<id>528</id>
			<name>Baseball</name>
		</option>
		<option>
			<id>537</id>
			<name>Softball</name>
		</option>
		<option>
			<id>527</id>
			<name>Football</name>
		</option>
		<option>
			<id>529</id>
			<name>Soccer</name>
		</option>
		<option>
			<id>536</id>
			<name>Tennis</name>
		</option>
	</application_field_options>
</response>
	`,
  getApplicationFields: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<field>
		<id>1111</id>
		<application_template_field_id>20</application_template_field_id>
		<name>Educational History</name>
		<description></description>
		<received_date>2008-04-15</received_date>
		<status>ACCEPTED</status>
	</field>
	<field>
		<id>1112</id>
		<application_template_field_id>21</application_template_field_id>
		<name>Please write us a 5-10 page essay on the topic of your choice.</name>
		<description></description>
		<received_date>2008-04-15</received_date>
		<status>ACCEPTED</status>
	</field>
	<field>
		<id>1113</id>
		<application_template_field_id>22</application_template_field_id>
		<name>Letter of Recommendation</name>
		<description></description>
		<received_date>2008-04-15</received_date>
		<status>ACCEPTED</status>
	</field>
</response>
	`,
  getApplicationTemplates: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<application_template>
		<id>112</id>
		<name>Basic</name>
		<show_online>0</show_online>
		<fee_amount></fee_amount>
		<fee_payment>BEFORE_START</fee_payment>
		<allow_undecided>1</allow_undecided>
	</application_template>
	<application_template>
		<id>114</id>
		<name>Standard</name>
		<show_online>1</show_online>
		<fee_amount>50</fee_amount>
		<fee_payment>BEFORE_START</fee_payment>
		<allow_undecided>1</allow_undecided>
		<programs>
			<program>
				<id>26</id>
				<name>Undergraduate</name>
			</program>
			<program>
				<id>27</id>
				<name>Graduate</name>
			</program>
		</programs>
		<academic_terms>
			<academic_term>
				<id>194</id>
				<name>2015-2016: Spring</name>
			</academic_term>
			<academic_term>
				<id>189</id>
				<name>2015-2016: Winter</name>
			</academic_term>
			<academic_term>
				<id>190</id>
				<name>2015-2016: Fall</name>
			</academic_term>
		</academic_terms>
		<enrollment_options>
			<enrollment_option>FULL_TIME</enrollment_option>
			<enrollment_option>HALF_TIME</enrollment_option>
			<enrollment_option>LESS_THAN_HALF_TIME</enrollment_option>
		</enrollment_options>
	</application_template>
</response>
	`,
  getApplications: `
	<?xml version="1.0" encoding="UTF-8"?>
<response num_results="356">
	<application>
		<id>54321</id>
		<lead_id>3214</lead_id>
		<lead_active>1</lead_active>
		<lead_status>ACCEPTED</lead_status>
		<person_id>1234</person_id>
		<first_name>Carl</first_name>
		<preferred_name></preferred_name>
		<middle_name>Allen</middle_name>
		<last_name>Michaelson</last_name>
		<gender>MALE</gender>
		<email>carl@email.org</email>
		<application_template_id>112</application_template_id>
		<application_template_name>Basic</application_template_name>
		<representative_id>2068</representative_id>
		<program_id>333</program_id>
		<program_name>Undergraduate</program_name>
		<degree_seeking>1</degree_seeking>
		<degree_id>444</degree_id>
		<degree_abbreviation>B.A.</degree_abbreviation>
		<degree_name>Bachelor of Arts</degree_name>
		<specialization_id>5555</specialization_id>
		<specialization_abbreviation>ENG</specialization_abbreviation>
		<specialization_name>English</specialization_name>
		<academic_term_id>7769</academic_term_id>
		<academic_term_name>2014-2015: Fall</academic_term_name>
		<expected_enrollment>FULL_TIME</expected_enrollment>
		<full_time>1</full_time>
		<started_on>2014-02-07</started_on>
		<submitted_at></submitted_at>
		<decision_on></decision_on>
		<withdrawn_on></withdrawn_on>
		<submitted_type>ONLINE</submitted_type>
		<provisional>0</provisional>
		<provisional_comment></provisional_comment>
		<fee_status>PAID</fee_status>
		<fee_id>8467</fee_id>
		<fee_amount>25.00</fee_amount>
		<fee_payment>BEFORE_START</fee_payment>
		<sales_receipt_id>12365789</sales_receipt_id>
		<transaction_id>549873215</transaction_id>
		<applicant_activity_at>2014-02-10 15:46:35</applicant_activity_at>
		<num_days_since_last_activity>3</num_days_since_last_activity>
		<staff_activity_at>2014-02-10 16:10:45</staff_activity_at>
		<percent_completed>95</percent_completed>
		<status>IN_PROGRESS</status>
	</application>
</response>
	`,
  getAllCustomFields: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<custom_field>
		<id>111</id>
		<name>Dorm Preference</name>
		<description>Quickly deliver enterprise-wide best practices rather than cross-media vortals. Enthusiastically predominate goal-oriented process improvements after fully tested niches. Globally fabricate ubiquitous content after synergistic web-readiness.</description>
		<type>STUDENT</type>
		<input_type>SELECT</input_type>
	</custom_field>
	<custom_field>
		<id>555</id>
		<name>Number of Previous Colleges Attended</name>
		<description>Collaboratively leverage other's mission-critical networks before accurate processes. Competently deliver multidisciplinary information before B2C intellectual capital.	Phosfluorescently embrace sticky outsourcing without cross-unit customer service.</description>
		<type>ADMISSIONS</type>
		<input_type>INTEGER</input_type>
	</custom_field>
</response>
  `,
  getAppeals: `
  <?xml version="1.0" encoding="UTF-8"?>
<response>
	<appeal>
		<id>3009</id>
		<name>Email Blast #1</name>
		<campaign_id>53</campaign_id>
		<appeal_medium_id>7</appeal_medium_id>
		<appeal_medium_name>Email</appeal_medium_name>
		<made_on>Mar 1, 2018</made_on>
		<cost>100</cost>
		<status>INACTIVE</status>
	</appeal>
	<appeal>
		<id>3094</id>
		<name>Cold call push</name>
		<campaign_id>54</campaign_id>
		<appeal_medium_id>8</appeal_medium_id>
		<appeal_medium_name>Callcenter</appeal_medium_name>
		<made_on>Jan 1, 2019</made_on>
		<cost>600</cost>
		<status>ACTIVE</status>
	</appeal>
</response>
  `,
  getAssignmentComments: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<comment>
		<id>39174392</id>
		<comment></comment>
		<file_id>63372577</file_id>
		<file_name>final_draft_v2.pages</file_name>
		<internal>0</internal>
		<added_at>2020-04-02 15:56:29</added_at>
		<added_by_id>168742</added_by_id>
		<added_by_name>Simon Student</added_by_name>
	</comment>
	<comment>
		<id>39174399</id>
		<comment>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</comment>
		<file_id></file_id>
		<file_name></file_name>
		<internal>1</internal>
		<added_at>2020-04-02 13:30:03</added_at>
		<added_by_id>17628</added_by_id>
		<added_by_name>Robert McProfessor</added_by_name>
	</comment>
</response>
	`,
  getAvailableRoles: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<role>
		<id>1234</id>
		<name>Academic Admin</name>
	</role>
	<role>
		<id>12345</id>
		<name>Admissions</name>
	</role>
	<role>
		<id>123456</id>
		<name>Advisor</name>
	</role>
</response>
	`,
  getCOACategories: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<coa_category>
		<id>18794687</id>
		<name>Books and Supplies</name>
		<type>BOOKS_AND_SUPPLIES</type>
	</coa_category>
	<coa_category>
		<id>15975463</id>
		<name>Tuition</name>
		<type>TUITION</type>
	</coa_category>
</response>
	`,
  getCampaigns: `
	<?xml version="1.0" encoding="UTF-8"?>
<response>
	<campaign>
		<id>2277</id>
		<name>Annual Giving</name>
		<goal></goal>
		<deadline>0</deadline>
		<status>ACTIVE</status>
	</campaign>
	<campaign>
		<id>2289</id>
		<name>Homecoming Weekend Events</name>
		<goal>150000</goal>
		<deadline>Oct 30, 2020 12:00am</deadline>
		<status>INACTIVE</status>
	</campaign>
</response>
	`,
  getTermStudents: `<?xml version="1.0" encoding="UTF-8"?>
  <response num_results="265">
    <student>
      <person_id>3093</person_id>
      <student_id>2010000043</student_id>
      <first>James</first>
      <last>McMcintosh</last>
      <middle_name>Rodrick</middle_name>
      <preferred_name>Jimmy</preferred_name>
      <username>jamesm17</username>
      <prefix>Mr.</prefix>
      <suffix>III</suffix>
      <former_name>III</former_name>
      <gender>MALE</gender>
      <birth_date>1990-01-01</birth_date>
      <image>_BASE_64_ENCODED_BINARY_IMAGE_DATA_RETURNED_HERE_</image>
      <program_id>26</program_id>
      <program_name>Undergraduate</program_name>
      <standing>Senior</standing>
      <degree>B.A.</degree>
      <specialization>PHIL</specialization>
      <full_time>1</full_time>
      <units_attempted>12.00</units_attempted>
      <units_granted>12.00</units_granted>
      <term_gpa>3.85</term_gpa>
      <cum_units_granted>100.00</cum_units_granted>
      <cum_gpa>3.55</cum_gpa>
      <cum_gpa_including_transfer>3.55</cum_gpa_including_transfer>
    </student>
    <student>
      <person_id>3093</person_id>
      <student_id>2010000043</student_id>
      <first>James</first>
      <last>McMcintosh</last>
      <middle_name>Rodrick</middle_name>
      <preferred_name>Jimmy</preferred_name>
      <username></username>
      <prefix>Mr.</prefix>
      <suffix>III</suffix>
      <former_name>III</former_name>
      <gender>MALE</gender>
      <birth_date>1990-01-01</birth_date>
      <image>_BASE_64_ENCODED_BINARY_IMAGE_DATA_RETURNED_HERE_</image>
      <program_id>27</program_id>
      <program_name>Graduate</program_name>
      <standing>Masters</standing>
      <degree>M.A.</degree>
      <specialization>ALAS</specialization>
      <full_time>0</full_time>
      <units_attempted>6.00</units_attempted>
      <units_granted>6.00</units_granted>
      <term_gpa>3.25</term_gpa>
      <cum_units_granted>12.00</cum_units_granted>
      <cum_gpa>3.45</cum_gpa>
      <cum_gpa_including_transfer>3.45</cum_gpa_including_transfer>
    </student>
  </response>`,
};

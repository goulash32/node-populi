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

const {
	isPathExists,
	createFile,
	firstLetterCaptalize,
	datasourceBuilder,
} = require('./util');

const { getDataSources } = require('./DataSourceConfig')

const ProjectBaseFilesGenerator = (ConfigObjects) => {
	const actualPath = ConfigObjects.getActualPath();
	const resourcePath = ConfigObjects.getResourcePath();
	const firstLetterCapitalProjectFormObject = firstLetterCaptalize(
		ConfigObjects['artifactId']
	);

	// if (ConfigObjects['mode'] == 'development') {
	// } else if (ConfigObjects['mode'] == 'production') {
	// }

	/********************************************************************************
	 *                        project main file
	 ********************************************************************************/
	let injectedContent = `package ${ConfigObjects.getBasePackageName()};

import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
${ConfigObjects['mode'] == 'development_SpringBoot' ? `public class ${firstLetterCapitalProjectFormObject} {` : `public class ${firstLetterCapitalProjectFormObject} extends SpringBootServletInitializer {`}

	public static void main(String[] args) {
		SpringApplication.run(${firstLetterCapitalProjectFormObject}.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer(){
			@Override
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**").allowedOrigins("${ConfigObjects['allowedOrigins']}").allowedMethods("${ConfigObjects['allowedMethods']
		}");
			}
		};
	}

}
`;
	createFile(
		`${actualPath}`,
		`${firstLetterCapitalProjectFormObject}.java`,
		injectedContent
	);

	/********************************************************************************
	 *                        project resource file
	 ********************************************************************************/
	//   let datasources = datasourceBuilder(ConfigObjects.getConfiguredDatasources());
	let datasources = datasourceBuilder(getDataSources(ConfigObjects['mode']));

	injectedContent = `
# Set here configurations for the database connection
${datasources}


# Keep the connection alive if idle for a long time (needed in production)
#spring.datasource.testWhileIdle=true
#spring.datasource.validationQuery=SELECT 1


# ===============================
#  Spring Data JPA / HIBERNATE
# ===============================
# Show or not log for each sql query
spring.jpa.show-sql=${ConfigObjects['jpa']['showSQL']}
#spring.jpa.properties.hibernate.generate_statistics=true
spring.jpa.properties.hibernate.format_sql=${ConfigObjects['jpa']['formatSQL']}
logging.level.org.hibernate.stat=${ConfigObjects['jpa']['stat']}
# Hibernate ddl auto (create, create-drop, update): with "create-drop" the database
# schema will be automatically created afresh for every start of application
#spring.jpa.hibernate.ddl-auto=none
#spring.jpa.hibernate.ddl-auto=update
#spring.jpa.hibernate.ddl-auto=create
spring.jpa.hibernate.ddl-auto=${ConfigObjects['jpa']['ddlAuto']}
#spring.jpa.hibernate.ddl-auto=create-drop
# Naming strategy
#spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
#spring.jpa.hibernate.naming.implicit-strategy=org.hibernate.boot.model.naming.ImplicitNamingStrategyLegacyHbmImpl
#spring.jpa.hibernate.naming.physical-strategy=org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy
# Allows To Hibernate to generate SQL optimized for a particular DBMS
spring.jpa.properties.hibernate.dialect=${ConfigObjects['jpa']['dialect']}
#spring.jpa.properties.hibernate.dialect.storage_engine=DB2

# ===============================
# = JWT
# ===============================
token.signing.key=${ConfigObjects['token']['tokenSigningKey']}
token.life.long=${ConfigObjects['token']['tokenLifeLong']}

#org.springframework.security.web.FilterChainProxy=debug

# ===============================
# = Global Paging Defaults
# ===============================
spring.data.web.pageable.size-parameter=${ConfigObjects['globalPaging']['sizeParameter']}
spring.data.web.pageable.page-parameter=${ConfigObjects['globalPaging']['pageParameter']}
spring.data.web.pageable.default-page-size=${ConfigObjects['globalPaging']['pageSize']}
#spring.data.web.pageable.one-indexed-parameters=false
spring.data.web.pageable.max-page-size=${ConfigObjects['globalPaging']['maxPageSize']}
#spring.data.web.pageable.prefix=
#spring.data.web.pageable.qualifier-delimiter=_`;

	isPathExists(resourcePath);
	createFile(resourcePath, `application.properties`, injectedContent);

	/********************************************************************************
	 *                        project pom.xml file
	 ********************************************************************************/
	injectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.1.0</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.behsazan.projects</groupId>
	<artifactId>${ConfigObjects['artifactId']}</artifactId>
	<version>${ConfigObjects['version']}</version>
	<name>mutualUnderstanding</name>
	<description>mutualUnderstanding project for Bank Mellat</description>
	<packaging>war</packaging>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>17</java.version>
		<wsdl.dir>\${project.basedir}/src/main/resources</wsdl.dir>
		<wsdl.dest.dir>\${project.basedir}/src/main/java/</wsdl.dest.dir>
<!--		<JWT-RELEASE-VERSION>0.11.5</JWT-RELEASE-VERSION>-->
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<version>1.18.28</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web-services</artifactId>
			<version>3.1.0</version>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.datatype</groupId>
			<artifactId>jackson-datatype-jsr310</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-hateoas</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			${ConfigObjects['mode'] != 'development_SpringBoot' ? `<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
			    <!--			only if we want to use log4j instead of logback-->
			    <!--
			    				<exclusion>
			    					<groupId>org.springframework.boot</groupId>
			    					<artifactId>spring-boot-starter-logging</artifactId>
			    				</exclusion>
			    -->
			</exclusions>
			` : `			    <!--			only if we want to use log4j instead of logback-->
			<!--
							<exclusion>
								<groupId>org.springframework.boot</groupId>
								<artifactId>spring-boot-starter-logging</artifactId>
							</exclusion>
			-->`}
		</dependency>
		${ConfigObjects['mode'] != 'development_SpringBoot' ? `
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
		</dependency>
` : ''}

		<!--				only if we want to use log4j instead of logback-->
		<!--		<dependency>-->
		<!--			<groupId>org.springframework.boot</groupId>-->
		<!--			<artifactId>spring-boot-starter-log4j2</artifactId>-->
		<!--		</dependency>-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.modelmapper</groupId>
			<artifactId>modelmapper</artifactId>
			<version>3.0.0</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<!--		<dependency>-->
		<!--			<groupId>com.mysql</groupId>-->
		<!--			<artifactId>mysql-connector-j</artifactId>-->
		<!--			<scope>runtime</scope>-->
		<!--		</dependency>-->
<!--
		<dependency>
			<groupId>com.ibm.db2</groupId>
			<artifactId>jcc</artifactId>
			<version>11.5.8.0</version>
		</dependency>
		<dependency>
			<groupId>db2</groupId>
			<artifactId>db2jcc_license_cisuz</artifactId>
			<version>1.0</version>
			<classifier>BusinessBanking</classifier>
		</dependency>
		<dependency>
			<groupId>db2</groupId>
			<artifactId>db2jcc_license_cu</artifactId>
			<version>1.0</version>
			<classifier>BusinessBanking</classifier>
		</dependency>
-->
		<dependency>
			<groupId>com.ibm.db2</groupId>
			<artifactId>db2jcc-license-cisuz</artifactId>
			<version>9.1.0</version>
		</dependency>
		<dependency>
			<groupId>BankdariNovin</groupId>
			<artifactId>db2jcc4</artifactId>
			<version>10.1</version>
		</dependency>

		<!--
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>io.jsonwebtoken</groupId>
				<artifactId>jjwt-api</artifactId>
				<version>0.11.5</version>
			</dependency>
			<dependency>
				<groupId>io.jsonwebtoken</groupId>
				<artifactId>jjwt-impl</artifactId>
				<version>0.11.5</version>
			</dependency>
			<dependency>
				<groupId>io.jsonwebtoken</groupId>
				<artifactId>jjwt-jackson</artifactId>
				<version>0.11.5</version>
			</dependency>
		</dependencies>
	</dependencyManagement>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
			<!--			<plugin>-->
			<!--				<groupId>org.apache.maven.plugins</groupId>-->
			<!--				<artifactId>maven-compiler-plugin</artifactId>-->
			<!--				<version>3.11.0</version>-->
			<!--				<configuration>-->
			<!--					<annotationProcessorPaths>-->
			<!--						<path>-->
			<!--							<groupId>org.mapstruct</groupId>-->
			<!--							<artifactId>mapstruct-processor</artifactId>-->
			<!--							<version>1.5.5.Final</version>-->
			<!--						</path>-->
			<!--					</annotationProcessorPaths>-->
			<!--				</configuration>-->
			<!--			</plugin>-->
		
			<plugin>
				<groupId>com.sun.xml.ws</groupId>
				<artifactId>jaxws-maven-plugin</artifactId>
				<version>4.0.1</version>
				<executions>
					<execution>
						<goals>
							<goal>wsimport</goal>
						</goals>
					</execution>
				</executions>
				<configuration>
					<packageName>com.behsazan.projects.mutualUnderstanding.customer</packageName>
	<!--					<sourceDestDir>\${project.build.directory}/generated-sources</sourceDestDir>-->
	<!--					<destDir>\${project.build.outputDirectory}</destDir>-->
					<wsdlDirectory>\${wsdl.dir}</wsdlDirectory>
					<wsdlFiles>
						<wsdlFile>clv.wsdl</wsdlFile>
					</wsdlFiles>
	<!--					<wsdlUrls>-->
	<!--						<wsdlUrl>https://customerranking.branch.bm/WebServiceCustomerGroups/GetDataForCustomerGroups.svc?singleWsdl</wsdlUrl>-->
	<!--					</wsdlUrls>-->
					<sourceDestDir>\${wsdl.dest.dir}</sourceDestDir>
					<extension>true</extension>
				</configuration>
			</plugin>


	<!--			<plugin>-->
	<!--				<groupId>org.jvnet.jaxb2.maven2</groupId>-->
	<!--				<artifactId>maven-jaxb2-plugin</artifactId>-->
	<!--				<version>0.15.3</version>-->
	<!--				<executions>-->
	<!--					<execution>-->
	<!--						<goals>-->
	<!--							<goal>generate</goal>-->
	<!--						</goals>-->
	<!--					</execution>-->
	<!--				</executions>-->
	<!--				<configuration>-->
	<!--					<schemaLanguage>WSDL</schemaLanguage>-->
	<!--&lt;!&ndash;					<generatePackage>\${project.basedir}/src/main/java/com/behsazan/projects/mutualUnderstanding/ws</generatePackage>&ndash;&gt;-->
	<!--&lt;!&ndash;					<generateDirectory>\${project.basedir}/src/main/java/com/behsazan/projects/mutualUnderstanding/ws</generateDirectory>&ndash;&gt;-->
	<!--					<schemaDirectory>\${project.basedir}/src/main/java/com/behsazan/projects/mutualUnderstanding/ws</schemaDirectory>-->
	<!--					<schemaIncludes>-->
	<!--						<include>*.wsdl</include>-->
	<!--					</schemaIncludes>-->
	<!--				</configuration>-->
	<!--			</plugin>-->

		</plugins>
	</build>

</project>
`;
	isPathExists(ConfigObjects.getBasePath());
	createFile(ConfigObjects.getBasePath(), `pom.xml`, injectedContent);

	/********************************************************************************
	 *                        create compiler.xml file of .idea folder
	 ********************************************************************************/
	injectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="CompilerConfiguration">
    <annotationProcessing>
      <profile default="true" name="Default" enabled="true" />
      <profile name="Maven default annotation processors profile" enabled="true">
        <sourceOutputDir name="target/generated-sources/annotations" />
        <sourceTestOutputDir name="target/generated-test-sources/test-annotations" />
        <outputRelativeToContentRoot value="true" />
        <module name="${ConfigObjects['artifactId']}" />
      </profile>
    </annotationProcessing>
  </component>
  <component name="JavacSettings">
    <option name="ADDITIONAL_OPTIONS_OVERRIDE">
      <module name="${ConfigObjects['artifactId']}" options="-parameters" />
    </option>
  </component>
</project>`;
	isPathExists(ConfigObjects.getIdeaPath());
	createFile(ConfigObjects.getIdeaPath(), `compiler.xml`, injectedContent);

	/********************************************************************************
	 *                        create compiler.xml file of .idea folder
	 ********************************************************************************/
	injectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="Encoding">
    <file url="file://$PROJECT_DIR$/src/main/java" charset="UTF-8" />
    <file url="file://$PROJECT_DIR$/src/main/resources" charset="UTF-8" />
  </component>
</project>`;
	createFile(ConfigObjects.getIdeaPath(), `encodings.xml`, injectedContent);

	/********************************************************************************
	 *                        create encoding.xml file of .idea folder
	 ********************************************************************************/
	injectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="RemoteRepositoriesConfiguration">
    <remote-repository>
      <option name="id" value="central" />
      <option name="name" value="${ConfigObjects['buildTool'].maven.central.name}" />
      <option name="url" value="${ConfigObjects['buildTool'].maven.central.url}" />
    </remote-repository>
    <remote-repository>
      <option name="id" value="snapshots" />
      <option name="name" value="${ConfigObjects['buildTool'].maven.central.name}" />
      <option name="url" value="${ConfigObjects['buildTool'].maven.central.url}" />
    </remote-repository>
    // <remote-repository>
    //   <option name="id" value="central" />
    //   <option name="name" value="Maven Central repository" />
    //   <option name="url" value="https://repo1.maven.org/maven2" />
    // </remote-repository>
    // <remote-repository>
    //   <option name="id" value="jboss.community" />
    //   <option name="name" value="JBoss Community repository" />
    //   <option name="url" value="https://repository.jboss.org/nexus/content/repositories/public/" />
    // </remote-repository>
  </component>
</project>`;
	createFile(
		ConfigObjects.getIdeaPath(),
		`jarRepositories.xml`,
		injectedContent
	);

	injectedContent = `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="ExternalStorageConfigurationManager" enabled="true" />
  <component name="MavenProjectsManager">
    <option name="originalFiles">
      <list>
        <option value="$PROJECT_DIR$/pom.xml" />
      </list>
    </option>
  </component>
  <component name="ProjectRootManager" version="2" languageLevel="${ConfigObjects['compiler']['javaCompiler']}" project-jdk-name="${ConfigObjects['compiler']['targetByteCodeVersion']}" project-jdk-type="JavaSDK" />
</project>`;
	createFile(ConfigObjects.getIdeaPath(), `misc.xml`, injectedContent);
};

module.exports = ProjectBaseFilesGenerator;

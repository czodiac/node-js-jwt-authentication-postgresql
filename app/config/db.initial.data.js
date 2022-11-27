/*
Cute tables initial data
========================

INSERT INTO public."cuteRoles"(
	name, "createdAt", "updatedAt")
	VALUES ('User', NOW(), NOW());
INSERT INTO public."cuteRoles"(
	name, "createdAt", "updatedAt")
	VALUES ('Admin', NOW(), NOW());

INSERT INTO public."cuteCountries"(
	name, "createdAt", "updatedAt")
	VALUES ('US', NOW(), NOW());
INSERT INTO public."cuteCountries"(
	name, "createdAt", "updatedAt")
	VALUES ('Canada', NOW(), NOW());
INSERT INTO public."cuteCountries"(
	id, name, "createdAt", "updatedAt")
	VALUES (-1, '', NOW(), NOW());

INSERT INTO public."cuteStates"(
	id, name, "countryId", "createdAt", "updatedAt")
	VALUES (-1, '', -1, NOW(), NOW());
INSERT INTO public."cuteStates"(
	name, "countryId", "createdAt", "updatedAt")
	VALUES ('Alabama', 1, NOW(), NOW());
INSERT INTO public."cuteStates"(
	name, "countryId", "createdAt", "updatedAt")
	VALUES ('Alberta', 2, NOW(), NOW());

        
INSERT INTO public."cuteCities"(
	id, name, "stateId", "createdAt", "updatedAt")
	VALUES (-1, '', '-1', NOW(), NOW());
INSERT INTO public."cuteCities"(
	name, "stateId", "createdAt", "updatedAt")
	VALUES ('AlaCity', '1', NOW(), NOW());
INSERT INTO public."cuteCities"(
	name, "stateId", "createdAt", "updatedAt")
	VALUES ('Calgary', '2', NOW(), NOW());
INSERT INTO public."cuteUsers"(
	email, password, "isMale", "createdAt", "updatedAt", "countryId", "stateId", "cityId", "roleId")
	VALUES ('sdf@sdf.sdf', 'mypass', true, '2022/08/01', '2022/08/01', 1, 1, 1, 2);
	
*/
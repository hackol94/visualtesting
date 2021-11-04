import * as HEADERS from './headers.js'

module.exports = {
    GET_BODY_EXAMPLE: [
        ['variable1', 'value1'],
        ['variable2', 'value2'],
        ['variable3', 'value3'],
    ],
    otp_security: {
        "crmIndex": "S",
        "responseCode": 0,
        "desc": "123-456-789",
        "otp": "41234123"
    },
    wss_viability: {
        "data": {
            "headers": HEADERS.headers,
            "income": "10000000.00",
            "city": 5212,
            "contractType": "01",
            "destination": "01",
            "requestedValue": 5000000,
            "rent": "0",
            "economicalActivity": "03",
            "residenceType": "0",
            "requestedTerm": 72,
            "startDt": "Wed Mar 29 2017 19:00:00 GMT-0500 (hora estándar de Colombia)",
            "dependents": "0",
            "levelEducation": "2",
            "maritalStatus": "2"
        },
        "action": "viabilityOfferInvocation"
    },
    wss_filing: { "action": "filingInvocation", "data": { "shouldExecFiling": true, "creditNumber": null, "headers": { "x-transaction-id": "2a4db1b9-064d-4639-a1ec-36402cc0f960", "x-channel": "ADL", "x-company-id": "0052", "x-gov-issue-ident-type": "CC", "x-ident-serial-num": "1014259384", "x-ip-addr": "161.69.121.36", "x-legal-name": "LIBRE_INVERSION", "x-sales-channel": "AG", "x-resume": "", "x-advisor": "" }, "filter": 10916, "economicActivityCode": "03", "basicData": { "documentType": "cc", "identificationNumber": "1014259384", "mobilePhoneNumber": "3219292474", "firstName": "BRAYAN", "secondName": "", "lastName": "MARTINEZ", "secondLastName": "", "fechaSipla": true }, "requiredData": { "activity": { "birthDate": 19900201, "economicalActivity": "03", "salary": "6485784", "startDt": "2011-02-01T05:00:00.000Z", "typeContract": "01" }, "additional": { "rental": "", "levelEducation": "2", "occupation": "00002", "addrType": "2", "cityPlace": "05212", "dependents": "0", "maritalStatus": "2" }, "contactClient": { "address": "Call 48 25 80", "emailAdressContact": "dfmm96@hotmail.com", "emailConfirm": "dfmm96@hotmail.com", "neighborhood": "San Cristobal" }, "clientInfo": "", "destinationData": { "destination": 1, "amount": "$ 3.000.000", "time": "72" }, "viabilityData": "{\"codRedOrigen\":\"AVV\",\"codRespuesta\":0,\"codServicioMonitor\":810008,\"codTransaccionMonitor\":810008,\"costoTransaccion\":0,\"datosSimulacion\":[{\"datosCarteras\":[{\"codEntidadOrigen\":1956,\"consecutivoObligacion\":5,\"cuota\":0,\"cuotaCalculada\":4000,\"indComprarCartera\":\"N\",\"indDescartarCartera\":\"S\",\"nombreEntidad\":\"COLSUBSIDIO MOCK\",\"nroObligacion\":376600,\"tipoDeudor\":\"PRINCIPAL\",\"tipoEntidad\":2,\"tipoNovedad\":\"N\",\"tipoObligacion\":2,\"tipoRegistro\":\"E\",\"valorSaldo\":210000},{\"codEntidadOrigen\":1,\"consecutivoObligacion\":5,\"cuota\":0,\"cuotaCalculada\":4000,\"indComprarCartera\":\"N\",\"indDescartarCartera\":\"S\",\"nombreEntidad\":\"COLSUBSIDIO-CAJA COLOMBIANA DE\",\"nroObligacion\":376600,\"tipoDeudor\":\"PRINCIPAL\",\"tipoEntidad\":2,\"tipoNovedad\":\"N\",\"tipoObligacion\":3,\"tipoRegistro\":\"E\",\"valorSaldo\":210000}],\"datosCuentas\":[{\"indCuentaDeposito\":\"S\",\"indDebitoAutomatico\":\"S\",\"nroCuenta\":\"*****2685\"}],\"datosFiltro\":[{\"codmensajeFiltro\":0,\"mensajeFiltro\":\"\",\"nroFiltro\":10916}],\"datosOfertas\":[{\"cuotaRecomendada\":940645,\"indRequiereDocumentos\":\"N\",\"plazo\":12,\"tasaInteres\":\"26.31\",\"valorRecomendadoCredito\":9903780,\"tasaMensual\":\"1.97\"}],\"datosSimulacionCredito\":[{\"codClasificacionCartera\":\"3\",\"codConvenio\":9999999999,\"codRespuesta\":0,\"cuotaCreditosAvvillas\":0,\"endeudamientoNoVivienda\":22427560,\"indCobroComision\":\"C\",\"indCobroEstudioCredito\":\"N\",\"indCupoAnticipoNomina\":\"N\",\"indCupoDineroExtra\":\"N\",\"indCupoPersonal\":\"N\",\"indCupoSobregiro\":\"N\",\"indCupoTarjetaCredito\":\"N\",\"indGmf\":\"N\",\"indLogEstimador\":\"S\",\"indMasiva\":\"\",\"indNomina\":\"\",\"indRutaDocumentos\":2,\"indSegmento\":0,\"ingresoCarguePreaprobado\":0,\"ingresoEstimador\":0,\"ingresoInicialCliente\":0,\"ingresos\":4500000,\"nitEmpresa\":0,\"nombreEmpresa\":\"\",\"nroArchivo\":0,\"nroDocumentoReferido\":0,\"nroMetodologia\":0,\"nrofiltroPrincipal\":0,\"tipoReferido\":\"\",\"valorComision\":0,\"valorCupoAnticipoNomina\":0,\"valorCupoAprobadAntNomina\":0,\"valorCupoAprobadSobregiro\":0,\"valorCupoAprobadoDinEx\":0,\"valorCupoAprobadoPersonal\":0,\"valorCupoAprobadoTC\":0,\"valorCupoDineroExtra\":0,\"valorCupoMaximoAntNomina\":0,\"valorCupoMaximoDinEx\":0,\"valorCupoMaximoPersonal\":40500000,\"valorCupoMaximoSobregiro\":1120000,\"valorCupoMaximoTC\":0,\"valorCupoPersonal\":0,\"valorCupoRecomenAntNomina\":0,\"valorCupoRecomenPersonal\":0,\"valorCupoRecomenSobregiro\":0,\"valorCupoRecomendadoDinEx\":0,\"valorCupoRecomendadoTC\":0,\"valorCupoSobregiro\":1120000,\"valorCupoTarjeta\":0,\"valorOtrosSeguros\":0,\"valorSeguro\":0,\"valorTasaMaxima\":0,\"valorTasaMinima\":0,\"gastosTotales\":100000},{\"nitEmpresa\":0,\"nombreEmpresa\":\"\"}]}],\"fechaCompensacion\":20210225,\"fechaTransaccion\":20210225,\"horaTransaccion\":214713,\"identificacionDispositivo\":\"185.125.225.21\",\"mensajeRespuesta\":\"TRANSACCION EXITOSA\",\"nroAutorizacion\":\"0\",\"nroSecuencia\":1234,\"cuotaMensualSeguro\":73153,\"cuotaDiariaSeguro\":2438}" }, "indRequiereDocumentos": 2 } },
    wss_digital_signature: { "action": "signDocuments", "data": { "insurance": true, "productNumber": 5860027721, "filter": 10916, "headers": { "x-transaction-id": "2a4db1b9-064d-4639-a1ec-36402cc0f960", "x-channel": "ADL", "x-company-id": "0052", "x-gov-issue-ident-type": "CC", "x-ident-serial-num": "1014259384", "x-ip-addr": "161.69.121.36", "x-legal-name": "LIBRE_INVERSION", "x-sales-channel": "AG", "x-resume": "", "x-advisor": "" }, "auditValue": "65765648", "createPasiveProduct": true, "requestNumberPS": 1000060237 } },
    otp_generations: {
        "pep": true,
        "firstLastName": "Brayan",
        "firstName": "Martinez",
        "identificationNumber": "1014259384",
        "phoneNumber": "3219292474",
        "secondLastName": "",
        "secondName": "",
        "documentType": "cc",
        "token": "N/A"
    },
    basic_data: {
        "identificationNumber": "9012389089",
        "documentType": "cc",
        "firstCall": true,
        "firstName": "",
        "secondName": "",
        "firstLastName": "",
        "secondLastName": "",
        "phoneNumber": ""
    },
    resume_credit: {
        "token": "03AGdBq25PiZK-4uD4VDsYAcF1MCbMQsxxZBEMCsHQnkU-y8QapRAID-r572SaU1qBkdm9eGNWqjlF0bs-uRe0esk15lp5Q7lyIia2hGVdKtcpKh1551gunRX1LmGYnRzSzpQuB5kE4zogBbzFOTuD2OeW8EniKCcQCr2WpQC8Jr59n7_Bz0F3Jr0YzZD4QTa2yKMKVLkR0SHhoGaOFqndYbH9tmzHEwQrO2yyANnYl7lQLqDpg5Fo0j4k4-NjqjEHj7dt-cInRN8kQOLKMLbEcZZtjKkXO7dTjcXJIuuRauXscpgw12K0aJU4f4RYLVYPAQTwTf6As2B8DraAvw-tQhKbKaBSY-alFRAloWNWKDxdQsVbZIFnktuBp1CPzc_7Sod2-XZkoROFeIDwAX5l9ZkRQMWBgkuamqoRUdgL8aRDluQDKJJKsINQjc9ZRSLJaVG-lGhbRVk2"
    },
    crm_query_enhanced: {},
    passive_product: { "fourPerThousand": false },
    update_credit: { "accountNumber": "*****2140", "closureDay": 2, "creditNumber": 5860027721, "debtAccount": "", "indicatorAcceptOffer": "A", "personalAccountNumberdisbursement": "*****2140", "requestNumber": 1000060237, "secuenceNumber": 1234, "transactionType": 1 },
    insurance_filing: { "officialDocumentNumber": 0, "beneficiaryName": "BRAYAN  MARTINEZ  ", "insuranceCode": 1, "paidFactorValue": 0.07777, "key": 5860027721, "keyLastRegister": 8681, "insuranceValue": 15949 },
    generation_promissory: {},
    wss_insurance_documents: { "action": "insuranceDocuments", "data": { "shouldExecIQ": true, "shouldExecDocs": true, "createPassiveProduct": true, "requestNumberPS": 1000060237, "creditNumber": 5860027721, "promissoryInd": "E", "economicActivityCode": "03", "headers": { "x-transaction-id": "8beb67cb-fbe8-41e9-9349-f6a49952039d", "x-channel": "ADL", "x-company-id": "0052", "x-gov-issue-ident-type": "CC", "x-ident-serial-num": "1012389123", "x-ip-addr": "161.69.121.36", "x-legal-name": "LIBRE_INVERSION", "x-sales-channel": "AG", "x-resume": "", "x-advisor": "" } } },
    wss_validacion_promissory: { "action": "validationPromissory", "data": { "shouldExecOtpValidation": true, "shouldExecSds": true, "headers": { "x-transaction-id": "8beb67cb-fbe8-41e9-9349-f6a49952039d", "x-channel": "ADL", "x-company-id": "0052", "x-gov-issue-ident-type": "CC", "x-ident-serial-num": "1012389123", "x-ip-addr": "161.69.121.36", "x-legal-name": "LIBRE_INVERSION", "x-sales-channel": "AG", "x-resume": "", "x-advisor": "" }, "otpValue": "34543567" } }
}
import requests
import json
import mysql.connector as connector
import pandas as pd
import openpyxl

url_contacto = "https://maundswywbsqqza.form.io/contactform/submission"
url = "https://maundswywbsqqza.form.io/productos/submission"
url2 = "https://maundswywbsqqza.form.io/productos/submission"
url3 = "https://maundswywbsqqza.form.io/productos/submission"
url4 = "https://maundswywbsqqza.form.io/productos/submission"
url5 = "https://maundswywbsqqza.form.io/productos/submission"
url6 = "https://maundswywbsqqza.form.io/productos/submission"

response = requests.request("GET", url)
response2 = requests.request("GET", url2)
response3 = requests.request("GET", url)
response4 = requests.request("GET", url2)
response5 = requests.request("GET", url)
response6 = requests.request("GET", url2)

data = json.loads(response.text)
data2 = json.loads(response2.text)
data3 = json.loads(response3.text)
data4 = json.loads(response4.text)
data5 = json.loads(response5.text)
data6 = json.loads(response6.text)

# Ordenamos el Json para que sea legible
#dataj = json.dumps(data2[0], indent=4)

def json_to_xlsx(data, xlsx):
    numero = 0
    data_list = []

    for elemento in data:
        person_list = []
        numero += 1
        person_list.append(numero)
        person_list.append(elemento['data']['nombre'])
        person_list.append(elemento['data']['email'])
        person_list.append(elemento['data']['tema'])
        person_list.append(elemento['data']['mensaje'])
        data_list.append(person_list)

    df = pd.DataFrame(data_list, columns=['Número', 'Nombre', 'Correo', 'Tema', 'Mensaje'])
    #print(df)

    with pd.ExcelWriter(xlsx) as writer:
        df.to_excel(writer, sheet_name="datos_rincon_dulce", index=False)

def json_to_xlsx_producto(data, xlsx):
    numero = 0
    data_list = []

    for elemento in data:
        person_list = []
        numero += 1
        person_list.append(elemento['data']['id'])
        person_list.append(elemento['data']['nombreProducto'])
        person_list.append(elemento['data']['precio'])
        person_list.append(elemento['data']['url'])
        data_list.append(person_list)

    df = pd.DataFrame(data_list, columns=['ID', 'Nombre', 'Precio', 'URL'])
    #print(df)

    with pd.ExcelWriter(xlsx) as writer:
        df.to_excel(writer, sheet_name="datos_rincon_dulce", index=False)

def json_to_sql(data):
    i = 0
    for elemento in data:
        try:
            connection = connector.connect(host='localhost',
                                           database='rincondulce',
                                           user='root',
                                           password='')

            mySql_insert_query = f"""INSERT INTO consulta (nombre, correo, tema, mensaje) VALUES ('{elemento['data']['nombre']}','{elemento['data']['email']}', '{elemento['data']['tema']}', '{elemento['data']['mensaje']}') """

            cursor = connection.cursor()
            cursor.execute(mySql_insert_query)
            connection.commit()
            print(cursor.rowcount, "Record inserted successfully into Laptop table")
            cursor.close()

        except connector.Error as error:
            print("Failed to insert record into Laptop table {}".format(error))

        finally:
            if connection.is_connected():
                connection.close()
                print("MySQL connection is closed")

def json_out(data):
    data_list = []
    for i in data:
        data_list.append(i['data'])
    jsonString = json.dumps(data_list)
    jsonFile = open("data.json", "w")
    jsonFile.write(jsonString)
    jsonFile.close()

#json_to_xlsx_producto(data2, 'productos.xlsx')
#json_to_sql(data)
json_out(data)
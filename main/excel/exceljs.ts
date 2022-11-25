import ExcelJs from "exceljs"
import { randNumber, randCompanyName, randPastDate } from "@ngneat/falso"

interface excelColumns {
    pedido: number,
    cliente: string,
    data: string,
    consumo: string
}

function writeXLSX(path: string, coffes: Array<string>) {

    const workbook = new ExcelJs.Workbook()

    coffes.forEach(coffe => {

        const sheet = workbook.addWorksheet(coffe)

        sheet.columns = [
            { header: "Pedido", key: "pedido" },
            { header: "Cliente", key: "cliente" },
            { header: "Data", key: "data" },
            { header: "Consumo", key: "consumo" },
        ]

        for (let i = 0; i < 10; i++) {

            const data: excelColumns = {
                pedido: randNumber({ min: 2000, max: 3000 }),
                cliente: randCompanyName(),
                data: randPastDate().toLocaleDateString(),
                consumo: randNumber().toString() + " KG"
            }

            sheet.addRow(data).alignment = {
                horizontal: "left"
            }
        }

        sheet.getRow(1).font = {
            bold: true,
            color: {
                argb: "FFFFFFFF"
            }
        }

        sheet.eachRow((row, rowNumber) => {
            if (rowNumber % 2 === 0) {
                return
            } else {
                row.fill = {
                    type: "pattern",
                    pattern: "solid",
                    fgColor: {
                        argb: "ffcdd5d1"
                    }
                }
            }
        })

        sheet.getRow(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: {
                argb: "ffde9607"
            }
        }
        workbook.xlsx.writeFile(`${path}.xlsx`)
    })

}

export { writeXLSX }
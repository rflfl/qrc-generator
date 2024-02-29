import { useState, useRef } from "react"
import { QRCodeCanvas } from "qrcode.react"

export const QrCode = () => {
    const [url, setUrl] = useState("")
    const [btnDownload, setBtnDownlaod] = useState(false)
    const qrRef = useRef()
    const downloadQRCode = () => {
        let canvas = qrRef.current.querySelector("canvas")
        let image = canvas.toDataURL("image/png")
        let anchor = document.createElement("a")
        anchor.href = image
        anchor.download = `qr-code.png`
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
        setUrl("")
        setBtnDownlaod(!btnDownload)
    }
    const qrCodeEncoder = (e) => {
        e.preventDefault()
        setUrl(e.target[0].value)
        setBtnDownlaod(!btnDownload)
    }
    const qrcode = (
        <QRCodeCanvas
            value={url}
            renderAs="canvas"
            size={288}
            bgColor={"#FFFFFF "}
            fgColor={"#222222"}
            level={"H"}
        />
    )

    const clean = () => {
        setBtnDownlaod(false)
        setUrl("")
    }

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md space-y-10" >
                <div>
                    <form onSubmit={qrCodeEncoder}>
                        <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                            Informe a URL
                        </label>
                        <div className="mt-2 flex items-center">
                            <div className="w-full">
                                <input
                                    id="url"
                                    name="url"
                                    type="url"
                                    defaultValue={url}
                                    placeholder="https://website.com.br"
                                    autoComplete="url"
                                    required
                                    className="block w-full rounded-l-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div>
                                <button type="submit" className="flex items-center bg-[#ff8058] justify-center w-auto h-12 px-2 text-white rounded-r-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                                    </svg>

                                    Gerar
                                </button>
                            </div>
                        </div>
                        <input type="reset" value="Limpar" onClick={clean} className="bg-[#50514f] text-gray-300 font-semibold text-xs rounded px-2 py-1 mt-2" />
                    </form>
                </div>
                <div>
                    {btnDownload ?
                        <button
                            onClick={downloadQRCode}
                            className="flex w-full justify-center rounded-md transition bg-[#ed474a] hover:bg-[#ed474acc] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download QR Code
                        </button> : null}
                </div>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div ref={qrRef} className="mx-auto mt-9 w-72 h-auto">
                    {url ? qrcode : null}
                </div>
            </div>
        </>
    )
}
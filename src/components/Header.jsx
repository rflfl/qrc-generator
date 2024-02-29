import QRCLogo from "../assets/logo.jpg"
export const Header = () => {
    return (
        <div className="px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-20 w-auto"
                src={QRCLogo}
                alt="QR Generator Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                QR Generator
            </h2>
        </div>
    )
}
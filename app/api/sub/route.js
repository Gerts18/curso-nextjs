
const { NextResponse } = require("next/server");

export async function GET(request) {
    return NextResponse.json({ message: "Otra ruta" });
}

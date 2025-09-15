export default function OfficeHoursPage() {
    return (
    <div className="grid gap-6">
    <h1 className="text-2xl font-bold">Office Hours</h1>
    <p className="opacity-80">Pick a slot from the available slots below. <br />
        <b>Please provide your details and a short description of your agenda.</b></p>
    <div className="rounded-2xl shadow-lg p-0 border border-gray-200 dark:border-gray-800 overflow-hidden">
    <iframe
    src="https://cal.com/kay-kappa-mpke4i/30min"
    style={{ width: '100%', height: 800, border: 0 }}
    loading="lazy"
    />
    </div>
    </div>
    );
    }
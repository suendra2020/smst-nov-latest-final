import Layout from '@/components/Layout';
import { useState, useRef } from 'react';
import { Download, QrCode } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DonationFormData {
  payerName: string;
  amount: string;
  description: string;
  email: string;
  phone: string;
}

interface Receipt {
  id: string;
  date: string;
  payerName: string;
  amount: string;
  description: string;
  email: string;
  phone: string;
}

export default function DonationPage() {
  const [formData, setFormData] = useState<DonationFormData>({
    payerName: '',
    amount: '',
    description: '',
    email: '',
    phone: '',
  });

  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  // Handle Input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show QR
  const generateQRCode = () => {
    setShowQRCode(true);
  };

  // Payment Submit
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.payerName ||
      !formData.amount ||
      !formData.description ||
      !formData.email ||
      !formData.phone
    ) {
      alert('Please fill in all fields');
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      alert('Enter valid amount');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const receiptId = `RECEIPT-${Date.now()}`;
      const newReceipt: Receipt = {
        id: receiptId,
        date: new Date().toLocaleDateString(),
        payerName: formData.payerName,
        amount: formData.amount,
        description: formData.description,
        email: formData.email,
        phone: formData.phone,
      };

      setReceipt(newReceipt);
      setIsProcessing(false);

      setFormData({
        payerName: '',
        amount: '',
        description: '',
        email: '',
        phone: '',
      });
    }, 2000);
  };

  // PDF Download
  const downloadReceipt = async () => {
    if (!receiptRef.current) return;

    const canvas = await html2canvas(receiptRef.current, {
      backgroundColor: '#ffffff',
    });

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Receipt-${receipt?.id}.pdf`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Support Sri Sai Master Seva Trust
            </h1>
            <p className="text-lg text-gray-600">
              Your contribution supports accommodation, seva, and spiritual services.
            </p>
          </div>

          {/* Grid - Left Form / Right Info */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* FORM */}
            {!receipt && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Make a Donation</h2>

           <img src="./canara.png" alt="" />
              </div>
            )}

            {/* RIGHT COLUMN INFORMATION */}
            <div className="space-y-6">

              {/* BANK DETAILS CARD */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank Details</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Bank:</strong> CANARA BANK (formerly Syndicate Bank)</p>
                  <p><strong>Account Type:</strong> Savings Account</p>
                  <p><strong>Account Number:</strong> 35062200004307</p>
                  <p><strong>Account Name:</strong> Sri Sai Master Seva Trust</p>
                  <p><strong>IFSC:</strong> CNRB0013506</p>
                  <p><strong>Branch:</strong> Anikepalli (Golagamudi), Nellore, AP - 524321</p>
                </div>
              </div>

              {/* ACTIVITIES CARD */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Activities</h3>
                <p className="text-gray-700 leading-relaxed">
                  Devotees visiting Golagamudi can stay freely at Sri Sai Master Nilayams I & II.
                  Lockers, fresh-up rooms, and halls for men & women available.
                  Daily 4 arathis are performed at 6 AM, 12 PM, 6:15 PM, and 9 PM.
                </p>
              </div>

              {/* CONTACT CARD */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact for Offering</h3>
                <p className="text-gray-700">Call before transferring your offerings:</p>

                <ul className="mt-3 space-y-1 text-gray-800">
                  <li>📞 +91 88846 38638</li>
                  <li>📞 +91 93430 97603</li>
                  <li>📞 +91 94426 44107</li>
                </ul>
              </div>

              {/* FEEDBACK CARD */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Feedback & Queries</h3>
                <p className="text-gray-700">
                  Email: <strong>saimaster.sevatrust@gmail.com</strong>
                </p>
              </div>

              {/* QR CODE */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Payment via QR</h3>
                <button
                  onClick={generateQRCode}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <QrCode /> Show QR Code
                </button>

                {showQRCode && (
                  <div className="mt-6 flex justify-center">
                    <div className="w-48 h-48 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center">
                      <QrCode size={72} className="text-gray-500" />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* RECEIPT */}
          {receipt && (
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
                ✓ Payment Successful
              </h2>

              <div ref={receiptRef}
                className="bg-orange-50 p-8 border rounded-xl border-orange-300"
              >
                <h3 className="text-center text-2xl font-bold text-orange-700 mb-4">
                  Donation Receipt
                </h3>

                <div className="space-y-3 text-gray-700">
                  <p><strong>Receipt ID:</strong> {receipt.id}</p>
                  <p><strong>Date:</strong> {receipt.date}</p>
                  <p><strong>Name:</strong> {receipt.payerName}</p>
                  <p><strong>Email:</strong> {receipt.email}</p>
                  <p><strong>Phone:</strong> {receipt.phone}</p>
                  <p><strong>Amount:</strong> ₹{receipt.amount}</p>
                  <p><strong>Purpose:</strong> {receipt.description}</p>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={downloadReceipt}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700"
                >
                  <Download /> Download Receipt
                </button>

                <button
                  onClick={() => setReceipt(null)}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

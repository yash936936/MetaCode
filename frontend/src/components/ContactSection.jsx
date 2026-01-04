import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Replace with your form endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-linear-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to transform your idea into reality? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind? Need expert guidance? Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email Us</p>
                  <a href="mailto:hello@yourcompany.com" className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group-hover:translate-x-1">
                    arijitsingh102004@gmail.com <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0 mt-1 group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-green-400 transition flex items-center gap-2 group-hover:translate-x-1">
                    +91 88007 67093
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0 mt-1 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Visit Us</p>
                  <p className="text-gray-400">Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="What's your name?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl">
                  🎉 Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

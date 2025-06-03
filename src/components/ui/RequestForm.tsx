import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  tradeDirection: string;
  productDetails: string;
  quantity: string;
  message: string;
};

const RequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(true);
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h3>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
          <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-green-800">Request Submitted Successfully!</h4>
            <p className="text-green-700 mt-1">
              Thank you for your interest. Our team will review your request and get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-red-800">Submission Failed</h4>
            <p className="text-red-700 mt-1">
              We encountered an error while processing your request. Please try again or contact us directly.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your phone number"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your company name"
              {...register('company')}
            />
          </div>
        </div>
        
        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Service Type *
            </label>
            <select
              id="serviceType"
              className={`w-full px-3 py-2 border rounded-md ${errors.serviceType ? 'border-red-500' : 'border-gray-300'}`}
              {...register('serviceType', { required: 'Please select a service type' })}
            >
              <option value="">Select a service</option>
              <option value="import">Import Services</option>
              <option value="export">Export Services</option>
              <option value="logistics">Logistics Services</option>
              <option value="customs">Customs Clearance</option>
              <option value="consulting">Trade Consulting</option>
            </select>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="tradeDirection" className="block text-sm font-medium text-gray-700 mb-1">
              Trade Direction *
            </label>
            <select
              id="tradeDirection"
              className={`w-full px-3 py-2 border rounded-md ${errors.tradeDirection ? 'border-red-500' : 'border-gray-300'}`}
              {...register('tradeDirection', { required: 'Please select trade direction' })}
            >
              <option value="">Select direction</option>
              <option value="uae-import">Import to UAE</option>
              <option value="uae-export">Export from UAE</option>
              <option value="transit">Transit through UAE</option>
              <option value="other">Other</option>
            </select>
            {errors.tradeDirection && (
              <p className="mt-1 text-sm text-red-600">{errors.tradeDirection.message}</p>
            )}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700 mb-1">
              Product Details *
            </label>
            <input
              id="productDetails"
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${errors.productDetails ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Product name, description, HS code (if known)"
              {...register('productDetails', { required: 'Product details are required' })}
            />
            {errors.productDetails && (
              <p className="mt-1 text-sm text-red-600">{errors.productDetails.message}</p>
            )}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity/Volume
            </label>
            <input
              id="quantity"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Estimated quantity, weight, or volume"
              {...register('quantity')}
            />
          </div>
        </div>
        
        {/* Additional Information */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Please provide any additional information or specific requirements"
            {...register('message')}
          ></textarea>
        </div>
        
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  address: string;
  serviceType: string;
  description: string;
};

const BookingForm = () => {
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
    <div>
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
          <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0 mt-0.5\" size={20} />
          <div>
            <h4 className="font-medium text-green-800">تم تقديم الطلب بنجاح!</h4>
            <p className="text-green-700 mt-1">
              سيقوم فريقنا بالتواصل معكم خلال ساعة.
            </p>
          </div>
        </div>
      )}
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-red-800">حدث خطأ</h4>
            <p className="text-red-700 mt-1">
              يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="الاسم الكامل"
            className={`w-full px-4 py-2 bg-white/5 border rounded-md placeholder-gray-400 text-white ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            }`}
            {...register('name', { required: 'الاسم مطلوب' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="رقم الهاتف"
            className={`w-full px-4 py-2 bg-white/5 border rounded-md placeholder-gray-400 text-white ${
              errors.phone ? 'border-red-500' : 'border-gray-600'
            }`}
            {...register('phone', { required: 'رقم الهاتف مطلوب' })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="العنوان"
            className={`w-full px-4 py-2 bg-white/5 border rounded-md placeholder-gray-400 text-white ${
              errors.address ? 'border-red-500' : 'border-gray-600'
            }`}
            {...register('address', { required: 'العنوان مطلوب' })}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-400">{errors.address.message}</p>
          )}
        </div>

        <div>
          <select
            className={`w-full px-4 py-2 bg-white/5 border rounded-md placeholder-gray-400 text-white ${
              errors.serviceType ? 'border-red-500' : 'border-gray-600'
            }`}
            {...register('serviceType', { required: 'نوع الخدمة مطلوب' })}
          >
            <option value="">اختر نوع الخدمة</option>
            <option value="installation">تركيب</option>
            <option value="maintenance">صيانة</option>
            <option value="repair">إصلاح</option>
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="وصف المشكلة"
            rows={4}
            className={`w-full px-4 py-2 bg-white/5 border rounded-md placeholder-gray-400 text-white ${
              errors.description ? 'border-red-500' : 'border-gray-600'
            }`}
            {...register('description', { required: 'وصف المشكلة مطلوب' })}
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'احجز الآن'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
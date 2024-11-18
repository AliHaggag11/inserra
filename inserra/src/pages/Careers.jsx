import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Clock, MapPin, X, Check, Building, ArrowRight, GraduationCap, Heart, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import heroImage from '../assets/plastic.png';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FileDropzone = ({ onFileAccepted, error }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles?.length) {
      onFileAccepted(acceptedFiles[0]);
    }
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div 
      {...getRootProps()} 
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}
        ${error ? 'border-red-500' : ''}
      `}
    >
      <input {...getInputProps()} />
      <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragActive ? 'text-primary' : 'text-gray-400'}`} />
      {isDragActive ? (
        <p className="text-primary">Drop your resume here</p>
      ) : (
        <div>
          <p className="text-gray-600">Drag & drop your resume here, or click to select</p>
          <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, DOC, DOCX</p>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

const ApplicationForm = ({ isJob = false, jobTitle = '', onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: isJob ? '' : undefined
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (isJob && !formData.coverLetter) newErrors.coverLetter = 'Cover letter is required';

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleFileAccepted = (file) => {
    setFormData(prev => ({ ...prev, resume: file }));
    setErrors(prev => ({ ...prev, resume: undefined }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/50`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/50`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/50`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Resume</label>
        <FileDropzone
          onFileAccepted={handleFileAccepted}
          error={errors.resume}
        />
        {formData.resume && (
          <div className="mt-2 text-sm text-gray-600">
            Selected file: {formData.resume.name}
          </div>
        )}
      </div>

      {isJob && (
        <div>
          <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
          <textarea
            value={formData.coverLetter}
            onChange={e => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${errors.coverLetter ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/50`}
          />
          {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
      >
        Submit Application
      </button>
    </form>
  );
};

const Careers = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsResumeModalOpen(false);
      setIsJobModalOpen(false);
    }, 2000);
  };

  const jobListings = [
    {
      title: "Senior Plastic Engineer",
      department: "Engineering",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "We are seeking an experienced Plastic Engineer to lead our product development team...",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Join our dynamic marketing team to help promote our innovative plastic solutions...",
    },
    {
      title: "Quality Assurance Technician",
      department: "Quality Control",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Ensure the highest standards of quality in our plastic manufacturing processes...",
    }
  ];

  const perks = [
    { icon: <GraduationCap className="w-8 h-8" />, title: "Professional Growth", description: "Continuous learning and development opportunities" },
    { icon: <Heart className="w-8 h-8" />, title: "Health Benefits", description: "Comprehensive health and wellness packages" },
    { icon: <Clock className="w-8 h-8" />, title: "Work-Life Balance", description: "Flexible working hours and remote options" },
    { icon: <Building className="w-8 h-8" />, title: "Modern Workspace", description: "State-of-the-art facilities and equipment" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be part of a team that's shaping the future of industrial solutions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Join INSERA?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-blue-200">Find your perfect role</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-blue-200 mb-6">{job.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-blue-200">
                      <Building size={16} className="mr-2" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button 
                    className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 group"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsJobModalOpen(true);
                    }}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Don't see the right position?</h2>
            <p className="text-blue-200 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume, 
              and we'll keep you in mind for future opportunities.
            </p>
            <button 
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 group"
              onClick={() => setIsResumeModalOpen(true)}
            >
              Submit Your Resume
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <Modal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
            title="Submit Your Resume"
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center py-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">We'll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <ApplicationForm onSubmit={handleSubmit} onClose={() => setIsResumeModalOpen(false)} />
            )}
          </Modal>
        )}

        {isJobModalOpen && selectedJob && (
          <Modal
            isOpen={isJobModalOpen}
            onClose={() => setIsJobModalOpen(false)}
            title={`Apply for ${selectedJob.title}`}
          >
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center py-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">We'll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <ApplicationForm
                isJob
                jobTitle={selectedJob.title}
                onSubmit={handleSubmit}
                onClose={() => setIsJobModalOpen(false)}
              />
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
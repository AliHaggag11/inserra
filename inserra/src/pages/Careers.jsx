import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Clock, MapPin, X, Check } from 'lucide-react';

const Careers = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeForm, setResumeForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });
  const [jobApplicationForm, setJobApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });
  const [resumeFormErrors, setResumeFormErrors] = useState({});
  const [jobFormErrors, setJobFormErrors] = useState({});
  const [isResumeSubmitted, setIsResumeSubmitted] = useState(false);
  const [isJobSubmitted, setIsJobSubmitted] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const jobListings = [
    {
      title: "Senior Plastic Engineer",
      department: "Engineering",
      location: "New York, NY",
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
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Ensure the highest standards of quality in our plastic manufacturing processes...",
    },
    // Add more job listings as needed
  ];

  const handleInputChange = (e, formSetter, errorSetter) => {
    const { name, value } = e.target;
    formSetter(prev => ({ ...prev, [name]: value }));
    errorSetter(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e, formSetter, errorSetter) => {
    const file = e.target.files[0];
    formSetter(prev => ({ ...prev, resume: file }));
    errorSetter(prev => ({ ...prev, resume: '' }));
  };

  const validateForm = (form, setErrors) => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Email is invalid';
    if (!form.phone.trim()) errors.phone = 'Phone is required';
    if (!form.resume) errors.resume = 'Resume is required';
    if (form.coverLetter !== undefined && !form.coverLetter.trim()) errors.coverLetter = 'Cover letter is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitResume = (e) => {
    e.preventDefault();
    if (validateForm(resumeForm, setResumeFormErrors)) {
      console.log('General resume submitted:', resumeForm);
      setIsResumeSubmitted(true);
      setTimeout(() => {
        setIsResumeModalOpen(false);
        setIsResumeSubmitted(false);
        setResumeForm({ name: '', email: '', phone: '', resume: null });
      }, 2000);
    }
  };

  const handleSubmitJobApplication = (e) => {
    e.preventDefault();
    if (validateForm(jobApplicationForm, setJobFormErrors)) {
      console.log('Job application submitted:', { job: selectedJob, application: jobApplicationForm });
      setIsJobSubmitted(true);
      setTimeout(() => {
        setIsJobModalOpen(false);
        setIsJobSubmitted(false);
        setJobApplicationForm({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
      }, 2000);
    }
  };

  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const SuccessAnimation = ({ message }) => (
    <motion.div
      className="flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rounded-full bg-green-500 p-2 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 500, damping: 15 }}
      >
        <Check size={48} color="white" />
      </motion.div>
      <p className="text-xl font-semibold text-gray-800">{message}</p>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          Careers at Insera
        </motion.h1>
        
        <motion.p
          className="text-xl text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our team and be part of the future of plastic innovation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Briefcase size={16} className="mr-2" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin size={16} className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  onClick={() => openJobModal(job)}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-blue-700 rounded-lg shadow-lg p-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
          <p className="mb-6">We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.</p>
          <button 
            className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => setIsResumeModalOpen(true)}
          >
            Submit Your Resume
          </button>
        </motion.div>
      </div>

      {/* General Resume Submission Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {isResumeSubmitted ? (
                <SuccessAnimation message="Resume submitted successfully!" />
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Submit Your Resume</h3>
                    <button onClick={() => setIsResumeModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <X size={24} />
                    </button>
                  </div>
                  <form onSubmit={handleSubmitResume}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={resumeForm.name}
                        onChange={(e) => handleInputChange(e, setResumeForm, setResumeFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${resumeFormErrors.name ? 'border-red-500' : ''}`}
                        required
                      />
                      {resumeFormErrors.name && <p className="text-red-500 text-sm mt-1">{resumeFormErrors.name}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={resumeForm.email}
                        onChange={(e) => handleInputChange(e, setResumeForm, setResumeFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${resumeFormErrors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {resumeFormErrors.email && <p className="text-red-500 text-sm mt-1">{resumeFormErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={resumeForm.phone}
                        onChange={(e) => handleInputChange(e, setResumeForm, setResumeFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${resumeFormErrors.phone ? 'border-red-500' : ''}`}
                        required
                      />
                      {resumeFormErrors.phone && <p className="text-red-500 text-sm mt-1">{resumeFormErrors.phone}</p>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Resume</label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={(e) => handleFileChange(e, setResumeForm, setResumeFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${resumeFormErrors.resume ? 'border-red-500' : ''}`}
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      {resumeFormErrors.resume && <p className="text-red-500 text-sm mt-1">{resumeFormErrors.resume}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Submit Resume
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Application Modal */}
      <AnimatePresence>
        {isJobModalOpen && selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {isJobSubmitted ? (
                <SuccessAnimation message="Application submitted successfully!" />
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h3>
                    <button onClick={() => setIsJobModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <X size={24} />
                    </button>
                  </div>
                  <form onSubmit={handleSubmitJobApplication}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={jobApplicationForm.name}
                        onChange={(e) => handleInputChange(e, setJobApplicationForm, setJobFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${jobFormErrors.name ? 'border-red-500' : ''}`}
                        required
                      />
                      {jobFormErrors.name && <p className="text-red-500 text-sm mt-1">{jobFormErrors.name}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={jobApplicationForm.email}
                        onChange={(e) => handleInputChange(e, setJobApplicationForm, setJobFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${jobFormErrors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {jobFormErrors.email && <p className="text-red-500 text-sm mt-1">{jobFormErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={jobApplicationForm.phone}
                        onChange={(e) => handleInputChange(e, setJobApplicationForm, setJobFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${jobFormErrors.phone ? 'border-red-500' : ''}`}
                        required
                      />
                      {jobFormErrors.phone && <p className="text-red-500 text-sm mt-1">{jobFormErrors.phone}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Resume</label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={(e) => handleFileChange(e, setJobApplicationForm, setJobFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${jobFormErrors.resume ? 'border-red-500' : ''}`}
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      {jobFormErrors.resume && <p className="text-red-500 text-sm mt-1">{jobFormErrors.resume}</p>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="coverLetter" className="block text-gray-700 font-bold mb-2">Cover Letter</label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={jobApplicationForm.coverLetter}
                        onChange={(e) => handleInputChange(e, setJobApplicationForm, setJobFormErrors)}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${jobFormErrors.coverLetter ? 'border-red-500' : ''}`}
                        rows="4"
                        required
                      ></textarea>
                      {jobFormErrors.coverLetter && <p className="text-red-500 text-sm mt-1">{jobFormErrors.coverLetter}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
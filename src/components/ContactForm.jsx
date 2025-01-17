import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Icon,
  VStack,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const firstNameRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, option, message } = formData;
    return firstName && lastName && email && phone && option && message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fill in all the required fields.");
      return;
    }

    const sid = import.meta.env.VITE_SERVICE_ID;
    const tid = import.meta.env.VITE_TEMPLATE_ID;
    const pid = import.meta.env.VITE_PUBLIC_ID;

    const emailParams = {
      to_name: `${formData.firstName} ${formData.lastName}`,
      from_name: "Your Website",
      message: `
        Option: ${formData.option}\n
        Message: ${formData.message}\n
        Email: ${formData.email}\n
        Phone: ${formData.phone}
      `,
    };

    try {
      await emailjs.send(sid, tid, emailParams, pid);
      setStatus("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        option: "",
        message: "",
      });
      if (firstNameRef.current) {
        firstNameRef.current.focus();
      }
      setShowSuccess(true); // Show success animation
      setTimeout(() => setShowSuccess(false), 3000); // Hide animation after 3 seconds
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus(
        "An error occurred while sending the message. Please try again."
      );
    }
  };

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={10}
        bg="purple.50"
      >
        <Box
          bg="white"
          p={10}
          rounded="lg"
          shadow="md"
          w={{ base: "100%", xl: "50%", md: "80%" }}
          mb={{ base: 8, md: 0 }}
          marginTop={20}
          position="relative"
        >
          <Heading as="h2" fontSize={45} mb={4} color="purple.700">
            Let’s work together!
          </Heading>
          <Text mb={6} color="gray.600">
            I create a project that satisfies the clients and provides them
            quality services.
          </Text>{" "}
          <Box position="relative">
            {status && !showSuccess && (
              <Text
                mt={4}
                textAlign="center"
                color={status.includes("success") ? "green.500" : "red.500"}
              >
                {status}
              </Text>
            )}
            {showSuccess && (
              <MotionBox
                position="absolute" // Use fixed to position it relative to the viewport
                top="20px" // Position it near the top
                left="50%" // Center horizontally
                transform="translateX(-50%)" // Adjust for perfect horizontal centering
                initial={{ y: -50, opacity: 0 }} // Start slightly above the viewport
                animate={{ y: 0, opacity: 1 }} // Slide into view
                exit={{ y: -50, opacity: 0 }} // Slide back up when exiting
                transition={{ duration: 0.5 }}
                borderRadius="lg" // Round the corners
                shadow="lg" // Add shadow for floating effect
                p={4} // Add padding
                zIndex={10} // Ensure it appears above other elements
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaCheckCircle} color="green.500" boxSize={8} />
                <Text fontSize="lg" color="green.500" ml={3}>
                  message was sent successfully!
                </Text>
              </MotionBox>
            )}
          </Box>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <HStack spacing={4} w="100%">
                <FormControl id="first-name" isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    ref={firstNameRef}
                    border="1px"
                    borderColor="purple.500"
                    focusBorderColor="purple.500"
                  />
                </FormControl>
                <FormControl id="last-name" isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    border="1px"
                    borderColor="purple.500"
                    focusBorderColor="purple.500"
                  />
                </FormControl>
              </HStack>
              <HStack spacing={4} w="100%">
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="sample@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    border="1px"
                    borderColor="purple.500"
                    focusBorderColor="purple.500"
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <Input
                    type="number"
                    name="phone"
                    maxLength={11}
                    placeholder="09123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    border="1px"
                    borderColor="purple.500"
                    focusBorderColor="purple.500"
                  />
                </FormControl>
              </HStack>
              <FormControl id="option" isRequired>
                <FormLabel>Select an option</FormLabel>
                <Select
                  name="option"
                  placeholder="— Please choose an option —"
                  value={formData.option}
                  onChange={handleChange}
                  border="1px"
                  borderColor="purple.500"
                  focusBorderColor="purple.500"
                >
                  <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>
                  <option value="WORDPRESS">WORDPRESS</option>
                  <option value="ECOMMERCE">ECOMMERCE</option>
                </Select>
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  border="1px"
                  borderColor="purple.500"
                  focusBorderColor="purple.500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
            </VStack>
            <Button
              type="submit"
              size="sm"
              marginTop="20px"
              bgGradient="linear(to-r, #824cedff,rgb(39, 39, 41))"
              color="white"
              borderRadius="full"
              px={[4, 4, 10]}
              py={[4, 4, 8]}
              transition="background 0.8s ease"
              _hover={{
                bgGradient: "linear(to-l, #824cedff, #311961ff)",
                transitionDuration: "0.8s",
              }}
            >
              Send a message
            </Button>
          </form>
        </Box>

        <Box p={8} rounded="lg" w={{ base: "100%", md: "40%" }} ml={{ md: 8 }}>
          <VStack spacing={6} align="start">
            <HStack align="center">
              <Circle size="10" bg="purple.500">
                <Icon as={FaPhoneAlt} boxSize={5} color="white" />
              </Circle>
              <VStack align="start">
                <Text>Phone</Text>
                <Text>
                  <a href="tel:09260447220">09260447220</a>
                </Text>
              </VStack>
            </HStack>
            <HStack align="center">
              <Circle size="10" bg="purple.500">
                <Icon as={FaEnvelope} boxSize={5} color="white" />
              </Circle>
              <VStack align="start">
                <Text>Email</Text>
                <Text>
                  <a href="mailto:markjoneldaeprelles@gmail.com">
                    markjoneldaeprelles@gmail.com
                  </a>
                </Text>
              </VStack>
            </HStack>
            <HStack align="center">
              <Circle size="10" bg="purple.500">
                <Icon as={FaMapMarkerAlt} boxSize={5} color="white" />
              </Circle>
              <VStack align="start">
                <Text>Address</Text>
                <Text>Sta.Ana, Taytay Rizal</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default ContactForm;

import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx"; // Import useSupabaseAuth

const Index = () => {
  const { logout } = useSupabaseAuth(); // Get logout function

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Our Website</Text>
        <Text>Start exploring our features by navigating through the menu.</Text>
      <Button onClick={logout}>Logout</Button> {/* Add logout button */}
      </VStack>
    </Container>
  );
};

export default Index;
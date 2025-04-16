// Initialize Supabase
const SUPABASE_URL = 'https://quvjsvhqfrrddkkumqnd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // use your full key here
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle login
async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single();

  if (error || !data) {
    document.getElementById("message").innerText = "❌ Invalid email or password.";
    console.error("Login error:", error);
  } else {
    localStorage.setItem("employeeEmail", data.email);
    localStorage.setItem("employeeName", data.name);
    localStorage.setItem("employeeID", data.id);
    window.location.href = "dashboard.html";
  }
}

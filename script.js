const SUPABASE_URL = 'https://quvjsvhqfrrddkkumqnd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJI...'; // your full key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Handle login
async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single();

  console.log("Login attempt:", { data, error });

  if (error || !data) {
    document.getElementById("message").innerText = "Invalid email or password.";
  } else {
    localStorage.setItem("employeeEmail", email);
    window.location.href = "dashboard.html";
  }
}

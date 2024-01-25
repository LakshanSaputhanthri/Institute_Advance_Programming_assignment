import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import { HomePage } from "../page/Home";
import { StudentPage } from "../page/Student";
import { Payment } from "../page/Payments";
import { Attendance } from "../page/Attendance";
import { TeacherPage } from "../page/Teacher";
import { Class } from "../page/Class";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/student" element={<StudentPage />} />

          <Route path="/class" element={<Class />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/teacher" element={<TeacherPage />} />

          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

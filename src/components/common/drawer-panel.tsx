"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MobileDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  user: any;
  goToDateSection: () => void;
}

export default function MobileDrawer({
  isOpen,
  toggleDrawer,
  user,
  goToDateSection
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleDrawer}
        >
          <motion.aside
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-64 bg-[#FFF8EF] shadow-xl p-2 rounded-r-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo */}
            {/* <div className="flex items-center justify-between mb-6">
              <Image
                src="/images/logos/logo_round.png"
                alt="pawtful logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div> */}

            {/* Auth */}
            <div className=" mb-6">
              {!user ? (
                <div onClick={toggleDrawer}>
                  <Link
                    href="/login?flow=loginflow"
                    className="flex items-center gap-2 text-[#EE9422]"
                  >
                    <LogIn size={20} />
                    <span>Login</span>
                  </Link>
                </div>
              ) : (
                <div
                  onClick={toggleDrawer}
                  className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 
                           bg-gradient-to-br from-white to-gray-50
                           backdrop-blur-sm
                           hover:shadow-xl hover:scale-[1.02] 
                           transition-all duration-300 ease-in-out
                           relative overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-transparent before:via-white/20 before:to-transparent
                           before:translate-x-[-100%] hover:before:translate-x-[100%]
                           before:transition-transform before:duration-700 before:ease-out"
                >
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 text-[#EE9422] relative z-10"
                  >
                    {user.image ? (
                      <div className="flex flex-col gap-2">
                        <Image
                          src={user.image}
                          alt="User Profile"
                          width={48}
                          height={48}
                          className="rounded-full ring-2 ring-[#EE9422]/20 shadow-md"
                        />
                        <text className="text-sm font-normal text-[#EE9422]">{user.name}</text>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EE9422]/10 to-[#EE9422]/20 
                                      flex items-center justify-center ring-2 ring-[#EE9422]/20 shadow-md"
                        >
                          <UserRound size={20} className="text-[#EE9422]" />
                        </div>
                        <span className="text-sm font-medium text-[#EE9422]">Profile</span>
                      </div>
                    )}
                  </Link>
                </div>
              )}
            </div>

            {/* Nav Links */}
            <nav className="space-y-4 text-sm font-medium">
              <div onClick={toggleDrawer}>
                <Link href="/mealplan">
                  <Button variant="ghost" className="w-full justify-start text-left text-gray-700">
                    Meal Plan
                  </Button>
                </Link>
              </div>
              <div onClick={toggleDrawer}>
                <Link href="/product">
                  <Button variant="ghost" className="w-full justify-start text-left text-gray-700">
                    Our Products
                  </Button>
                </Link>
              </div>
              <div onClick={toggleDrawer}>
                <Link href="/faq">
                  <Button variant="ghost" className="w-full justify-start text-left text-gray-700">
                    FAQ's
                  </Button>
                </Link>
              </div>
              <div
                onClick={() => {
                  toggleDrawer();
                  goToDateSection();
                }}
              >
                <Link href="/onboarding">
                  <Button className="w-full justify-start text-left bg-[#EE9422] text-white hover:bg-[#e88a12]">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

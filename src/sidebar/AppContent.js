import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CSpinner } from '@coreui/react'
import { navItems } from './ContentPath'

const AppContent = () => {
    return (
        <div>
            <Suspense fallback={<CSpinner color="primary" />}>
                <Routes>
                    {navItems.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<Navigate to="/about" replace />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default React.memo(AppContent)
